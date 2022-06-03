export interface InitialState {
    loading: boolean;
    method: string;
    url: string;
    headerFields: Field[];
    requestFields: string;
    responseFields: string;
    isError: boolean;
    successMessage: string;
}

export interface Contract {
    url: string;
    method: string;
    headerFields: Field[];
    requestFields: string;
    responseFields: string;
}

export interface Field {
    id: string;
    key: string;
    value: string;
    fieldDescription?: string;
}

export enum FieldProperty {
    id = "id",
    key = "key",
    value = "value",
    fieldDescription = "fieldDescription",
}

export enum StructureType {
    headerStructure = "Header structure",
    requestStructure = "Request structure",
    responseStructure = "Response structure",
}

export enum StateProperty {
    url = "url",
    method = "method",
    loading = "loading",
    headerFields = "headerFields",
    requestFields = "requestFields",
    responseFields = "responseFields",
}

export enum Numbers {
    one = "one",
    two = "two",
    three = "three",
}
