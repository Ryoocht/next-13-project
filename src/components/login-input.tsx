"use client";

import React, { useState } from "react";
import { UserArgs } from "@/app/auth/login/page";
import { AuthService } from "@/service/auth-service";
import { useMutation, useQuery } from "@tanstack/react-query";

const LoginInput = () => {
  const [userInput, setUserInput] = useState<UserArgs>({
    email: "",
    password: "",
  });

  const { mutate: login, data } = useMutation({
    mutationFn: (values: UserArgs) => AuthService.login(values),
  });

  const { data: userData } = useQuery({
    queryKey: ['user'],
    queryFn: () => AuthService.getMe()
  })

  return (
    <div className="flex flex-col gap-5">
      <input
        type="text"
        value={userInput.email}
        onChange={(e) =>
          setUserInput((prev) => ({
            ...prev,
            email: e.target.value,
          }))
        }
        className="text-black"
      />
      <input
        type="password"
        value={userInput.password}
        onChange={(e) =>
          setUserInput((prev) => ({
            ...prev,
            password: e.target.value,
          }))
        }
        className="text-black"
      />
      <button onClick={() => login(userInput)}>SUBMIT</button>
      <div>
        <p>
          Result: {data?.countryCode} {data?.number}
        </p>
      </div>
      <div>
        {userData?.user.email}
      </div>
    </div>
  );
};

export default LoginInput;
