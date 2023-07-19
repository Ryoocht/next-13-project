import React from "react";
import Hydrate from "@/components/hydrate-client";
import LoginInput from "@/components/login-input";
import getQueryClient from "@/lib/get-query-client";
import { dehydrate } from "@tanstack/react-query";
import { components, paths } from "../../../../path/to/my/schema";
import { AuthService } from "@/service/auth-service";

export type UserArgs =
  paths["/api/v1/auth/admin/login/start"]["post"]["requestBody"]["content"]["application/json"];
export type UserData =
  paths["/api/v1/auth/admin/login/start"]["post"]["responses"]["201"]["content"]["application/json"];
type User = components["schemas"]["UserPhoneNumberDto"];

const Login = async () => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["user"], AuthService.getMe);
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <div className="w-48">
        <LoginInput />
      </div>
    </Hydrate>
  );
};

export default Login;
