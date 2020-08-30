import {Api} from './api';
import { User, GetUserResult } from './types';
import { ApiResponse } from 'apisauce';
import { getGeneralApiProblem } from './api-problem';

const test = new Api();

export const login = async (
  username: string, 
  password: string
): Promise<GetUserResult> => {
  const response: ApiResponse<any> = await test.apiSauce.post(`/login`, {
    username,
    password
  });

  // the typical ways to die when calling an api
  if (!response.ok) {
    const problem = getGeneralApiProblem(response);
    if (problem) return problem;
  }

  // transform the data into the format we are expecting
  try {
    const resultUser: User = {
      id: response.data.id,
      name: response.data.name,
    }
    return { kind: "ok", user: resultUser }
  } catch {
    return { kind: "bad-data" }
  }
}