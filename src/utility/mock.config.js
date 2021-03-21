import MockAdapter from "axios-mock-adapter";
import {rowData} from "../mocks/gridDataMock";

let usersList = rowData;

export const isMockEnabled = () => {
    return process.env.REACT_APP_MOCK_ENABLED === 'true'
};

export const initializeAxiosMockAdapter = (instance) => {
    const mock = new MockAdapter(instance);
    mock.onGet("/users").reply(() => getUsers());
    mock.onPost("/user").reply(config => addUser(config));
};

export const getUsers = () => {
    return [200, rowData];
};

export const addUser = (config) => {
    const user = JSON.parse(config.data);
    usersList.push(user);
    return [200, usersList];
};
