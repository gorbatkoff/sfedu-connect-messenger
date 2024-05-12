import { FC } from "react";

import { Button, Checkbox, Form, FormProps, Input } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

import { useAppDispatch } from "@/shared/hooks/useAppDispatch/useAppDispatch";

import { userAuthorization } from "../model/services/authorization";
import { AuthorizationProps } from "../model/types/authorization";

interface ILoginFormProps {
  className?: string;
}

export const LoginForm: FC<ILoginFormProps> = ({ className }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onFinish: FormProps<AuthorizationProps>["onFinish"] = async (
    values
  ) => {
    const { email, password } = values;

    if (!email || !password) return;
    //@ts-ignore
    const request = await dispatch(userAuthorization({ email, password }));

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
