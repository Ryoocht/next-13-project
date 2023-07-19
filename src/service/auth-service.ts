import createClient from "openapi-fetch";
import { paths } from "../../path/to/my/schema";
import { UserArgs } from "@/app/auth/login/page";

export namespace AuthService {
  const { get, patch, post } = createClient<paths>({
    baseUrl: "https://api.development.180markets.link",
  });

  export const login = async ({ email, password }: UserArgs) => {
    try {
      const { data, response, error } = await post(
        "/api/v1/auth/admin/login/start",
        {
          body: {
            email,
            password,
          },
        }
      );
      if (response.status !== 201) throw Error(error?.message);
      return data;
    } catch (error) {
      throw Error("Something went wrong.");
    }
  };

  export const getMe = async () => {
    try {
      const { data, response, error } = await get("/api/v1/auth/admin/me", {});
      if (response.status !== 200) throw Error(error?.message);
      return data;
    } catch (error) {
      throw Error("Something went wrong.");
    }
  };
}
