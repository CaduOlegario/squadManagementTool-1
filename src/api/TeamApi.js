import * as apiEndpoints from '../constants/apiEndpoints';
import * as httpMethods from '../constants/httpMethods';
import * as contentTypes from '../constants/contentTypes';
import axios from 'axios';
import React from "react";

class TeamApi {

    static getTeams() {
        // let data = {
        //     "companyCnpj": document,
        // };
        //
        // return axios({
        //     method: httpMethods.REQUEST_METHOD_GET,
        //     url: apiEndpoints.TEAM_LIST_ENDPOINT + "1",
        //     headers: {'Content-Type': contentTypes.CONTENT_TYPE_APPLICATION_JSON,
        //         'X-RapidAPI-Key': ''},
        // }).then(response => {
        //     return response.teams;
        // }).catch(error => {
        //     let status = error.api.error;
        //     return status;
        //     // throw error;
        // });

            const data = {
                api: {
                    teams: [
                        {
                            "team_id": 541,
                            "name": "Real Madrid",
                            "code": null,
                            "logo": "https://media.api-sports.io/football/teams/541.png",
                            "is_national": false,
                            "country": "Spain",
                            "founded": 1902,
                            "venue_name": "Estadio Santiago Bernabéu",
                            "venue_surface": "grass",
                            "venue_address": "Avenida de Concha Espina 1, Chamartín",
                            "venue_city": "Madrid",
                            "venue_capacity": 85454
                        },
                        {
                            "team_id": 542,
                            "name": "Mercedes",
                            "code": null,
                            "logo": "https://media.api-sports.io/football/teams/541.png",
                            "is_national": false,
                            "country": "Spain",
                            "founded": 1902,
                            "venue_name": "Estadio Santiago Bernabéu",
                            "venue_surface": "grass",
                            "venue_address": "Avenida de Concha Espina 1, Chamartín",
                            "venue_city": "Madrid",
                            "venue_capacity": 85454
                        }
                    ]
                }
            };


            return new Promise((resolve, reject) =>
                setTimeout(() => {
                    resolve(data)
                }, 5000)
            );

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