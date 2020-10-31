import * as apiEndpoints from '../constants/apiEndpoints';
import * as httpMethods from '../constants/httpMethods';
import * as contentTypes from '../constants/contentTypes';
import axios from 'axios';
import React from "react";

class TeamApi {

    static filterBy() {
        let data = {
            "companyCnpj": document,
        };

        return axios({
            method: httpMethods.REQUEST_METHOD_POST,
            url: apiEndpoints.ENDPOINT,
            headers: {'Content-Type': contentTypes.CONTENT_TYPE_APPLICATION_JSON, 'Authorization': 'Bearer ' + token},
            data: JSON.stringify(data)
        }).then(response => {
            return response.data;
        }).catch(error => {
            let status = error.response.status;
            if (status == 400 || status == 404 || status == 500)
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