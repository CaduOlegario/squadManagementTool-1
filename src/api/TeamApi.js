import * as apiEndpoints from 'constants/apiEndpoints';
import * as httpMethods from 'constants/httpMethods';
import * as contentTypes from 'constants/contentTypes';
import axios from 'axios';

class TeamApi {

    static getTeams() {
        return axios({
            method: httpMethods.REQUEST_METHOD_GET,
            url: apiEndpoints.TEAM_LIST_ENDPOINT,
            headers: {
                'Content-Type': contentTypes.CONTENT_TYPE_APPLICATION_JSON,
                "X-RapidAPI-Key": "a4399456d442759ce8d457e1b34aeff5"
            },
        }).then(response => {
            return response.data.response;
        }).catch(error => {
            return "Unreachable API";
        });
    }


    static getPlayers() {
        return axios({
            method: httpMethods.REQUEST_METHOD_GET,
            url: apiEndpoints.PLAYER_LIST_ENDPOINT,
            headers: {
                'Content-Type': contentTypes.CONTENT_TYPE_APPLICATION_JSON,
                "X-RapidAPI-Key": "a4399456d442759ce8d457e1b34aeff5"
            },
        }).then(response => {
            return response.data.response;
        }).catch(error => {
            return "Unreachable API";
        });
    }

    // Mock Api Call as football-api free version doesn't support inserting teams
    static saveTeam(team) {

        return axios({
            method: httpMethods.REQUEST_METHOD_POST,
            url: apiEndpoints.MOCK_INSERT_ENDPOINT + '?mocky-delay=100ms',
            headers: {
                'Content-Type': contentTypes.CONTENT_TYPE_APPLICATION_JSON,
                "X-RapidAPI-Key": "a4399456d442759ce8d457e1b34aeff5"
            },
            data: JSON.stringify(team)
        }).then(response => {
            return response.data.response;
        }).catch(error => {
            let status = error.response.status;
            if (status === 400 || status === 404 || status === 500)
                return error.response.data;
            throw error;
        });
    }

    //
    // static deleteStub(stubId) {
    //     let user = storageUtils.getItem('user');
    //     let token = user.accessToken;
    //
    //     return axios({
    //         method: httpMethods.REQUEST_METHOD_DELETE,
    //         url: apiEndpoints.STUB_DELETE_ENDPOINT + '/' + stubId,
    //         headers: {'Content-Type': contentTypes.CONTENT_TYPE_APPLICATION_JSON, 'Authorization': 'Bearer ' + token}
    //     }).then(response => {
    //         return response.data;
    //     }).catch(error => {
    //         let status = error.response.status;
    //         if (status == 400 || status == 404 || status == 500)
    //             return error.response.data;
    //         throw error;
    //     });
    // }
    //
    // static getDetails(stubId) {
    //     let user = storageUtils.getItem('user');
    //     let token = user.accessToken;
    //
    //     return axios({
    //         method: httpMethods.REQUEST_METHOD_GET,
    //         url: apiEndpoints.STUB_DETAILS_ENDPOINT + '/' + stubId,
    //         headers: {'Content-Type': contentTypes.CONTENT_TYPE_APPLICATION_JSON, 'Authorization': 'Bearer ' + token}
    //     }).then(response => {
    //         return response.data;
    //     }).catch(error => {
    //         let status = error.response.status;
    //         if (status == 400 || status == 404 || status == 500)
    //             return error.response.data;
    //         throw error;
    //     });
    // }

}

export default TeamApi;