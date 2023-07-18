"use client";

import React from "react";
import { useMutation } from "react-query";
import { AuthService } from "@/service/auth-service";
import { components, paths } from "../../../../path/to/my/schema";

type UserArgs = paths["/api/v1/auth/admin/login/start"]["post"]["requestBody"];
type UserData =
  paths["/api/v1/auth/admin/login/start"]["post"]["responses"]["201"]["content"]["application/json"];
type User = components["schemas"]["UserPhoneNumberDto"];

const Login = () => {
  const {} = useMutation({
    mutationFn: () => AuthService.login(),
    onSuccess: (result) => {
      console.log({ result });
    },
    onError: (e: Error) => {
      console.log(e.message);
    },
  });

  return <div>Login</div>;
};

export default Login;
