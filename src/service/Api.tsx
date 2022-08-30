const Api = {
    surveys(): Promise<any> {
        return fetch('https://630c9fa353a833c534304965.mockapi.io/api/v1/surveys').then((response) => response.json());
    }
}

export default Api;