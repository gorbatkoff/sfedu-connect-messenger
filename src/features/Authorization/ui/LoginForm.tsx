import { FC } from "react";

import { Button, Checkbox, Form, FormProps, Input } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

import { useGetPublicKeyQuery } from "@/shared/api/getPublicKey/getPublicKey";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch/useAppDispatch";
import { encryptData } from "@/shared/lib/encryptData/encryptData";

import { userAuthorization } from "../model/services/authorization";
import { AuthorizationProps } from "../model/types/authorization";

interface ILoginFormProps {
  className?: string;
}

export const LoginForm: FC<ILoginFormProps> = ({ className }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { data: publicKey } = useGetPublicKeyQuery();

  const onFinish: FormProps<AuthorizationProps>["onFinish"] = async (
    values
  ) => {
    const { email, password } = values;
    if (!publicKey) return;
    if (!email || !password) return;

    const encryptedEmail = await encryptData(email, publicKey.publicKey);
    const encryptedPassword = await encryptData(password, publicKey.publicKey);

    if (!encryptedPassword || !encryptedEmail) return;

    const request = await dispatch<any>(
      userAuthorization({
        email: encryptedEmail,
        password: encryptedPassword,
      })
    );

    if (request.payload === "Error") return;

    if (pathname === "/login") {
      navigate("/");
    }
  };

  const onFinishFailed: FormProps<AuthorizationProps>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      className={className}
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<AuthorizationProps>
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
            type: "email",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item<AuthorizationProps>
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item<AuthorizationProps>
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
