import createClient from "openapi-fetch";
import { paths } from "../../path/to/my/schema";
import { UserArgs } from "@/app/auth/login/page";
import Sdk, {
  AuthAdminLoginFirstStepBodyParam,
  AuthAdminLoginFirstStepResponse201,
} from "@api/backend";

export namespace AuthService {
  const { get, patch, post } = createClient<paths>({
    baseUrl: "https://api.development.180markets.link",
  });

  const api = Sdk.auth("");

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

  export const loginWithApi = async ({
    email,
    password,
  }: AuthAdminLoginFirstStepBodyParam): Promise<AuthAdminLoginFirstStepResponse201> => {
    try {
      const { data, res, status } = await api.authAdminLoginFirstStep({
        email,
        password,
      });
      if (status !== 201) throw Error;
      return data;
    } catch (error) {
      throw Error("Something went wrong.");
    }
  };
}
