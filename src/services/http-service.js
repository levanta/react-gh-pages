const HttpService = {
  send(url) {
    return fetch(url)
      .then((response) => response.json())
  }
}

  
export default HttpService;