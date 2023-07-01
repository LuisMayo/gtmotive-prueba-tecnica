export interface ModelsResponse {
    Count:          number;
    Message:        string;
    SearchCriteria: string;
    Results:        ModelsResult[];
}

export interface ModelsResult {
    Make_ID:    number;
    Make_Name:  string;
    Model_ID:   number;
    Model_Name: string;
}

