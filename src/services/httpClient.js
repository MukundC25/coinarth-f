// HTTP client with token refresh interceptor
import api from './api';

class HttpClient {
  constructor() {
    this.accessToken = null;
    this.refreshingPromise = null;
  }

  // Set the access token
  setAccessToken(token) {
    this.accessToken = token;
  }

  // Get the access token
  getAccessToken() {
    return this.accessToken;
  }

  // Handle token refresh
  async refreshToken() {
    if (!this.refreshingPromise) {
      this.refreshingPromise = api.refreshToken()
        .then(response => {
          this.accessToken = response.accessToken;
          return response.accessToken;
        })
        .finally(() => {
          this.refreshingPromise = null;
        });
    }
    
    return this.refreshingPromise;
  }

  // Make a request with automatic token refresh
  async request(config) {
    try {
      // Add authorization header if token exists
      if (this.accessToken) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${this.accessToken}`,
        };
      }
      
      // Make the request
      const response = await fetch(config.url, {
        method: config.method || 'GET',
        headers: config.headers || {},
        body: config.data ? JSON.stringify(config.data) : undefined,
      });
      
      // If the response is 401 Unauthorized, try to refresh the token
      if (response.status === 401) {
        try {
          // Refresh the token
          await this.refreshToken();
          
          // Retry the request with the new token
          return this.request({
            ...config,
            headers: {
              ...config.headers,
              Authorization: `Bearer ${this.accessToken}`,
            },
          });
        } catch (error) {
          // If refresh fails, throw the error
          throw new Error('Session expired. Please log in again.');
        }
      }
      
      // Parse the response
      const data = await response.json();
      
      // If the response is not ok, throw an error
      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }
      
      return data;
    } catch (error) {
      throw error;
    }
  }

  // GET request
  async get(url, config = {}) {
    return this.request({
      ...config,
      url,
      method: 'GET',
    });
  }

  // POST request
  async post(url, data, config = {}) {
    return this.request({
      ...config,
      url,
      method: 'POST',
      data,
    });
  }

  // PUT request
  async put(url, data, config = {}) {
    return this.request({
      ...config,
      url,
      method: 'PUT',
      data,
    });
  }

  // DELETE request
  async delete(url, config = {}) {
    return this.request({
      ...config,
      url,
      method: 'DELETE',
    });
  }
}

// Create a singleton instance
const httpClient = new HttpClient();

export default httpClient;
