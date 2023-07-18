import createClient from "openapi-fetch";
import { paths } from "../../path/to/my/schema";

export namespace AuthService {
  const { get, patch, post } = createClient<paths>({
    baseUrl: "https://api.development.180markets.link",
  });

  export const login = async () => {
    try {
      const { data, response, error } = await post("/api/v1/auth/admin/login/start", {
        body: {
          email: "ryo@moonward.com.au",
          password: "asdf1234!",
        },
      });
      if (response.status !== 200) throw Error(error?.message)
      return data
    } catch (error) {
        throw Error('Something went wrong.')
    }
  };
}
