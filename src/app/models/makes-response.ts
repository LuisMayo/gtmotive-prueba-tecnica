export interface MakesResponse {
    Count:          number;
    Message:        string;
    SearchCriteria: null;
    Results:        MakesResult[];
}

export interface MakesResult {
    Make_ID:   number;
    Make_Name: string;
}
