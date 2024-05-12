import { FC } from "react";

import { Button, Checkbox, Form, FormProps, Input } from "antd";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "@/shared/hooks/useAppDispatch/useAppDispatch";

import { userRegistration } from "../model/services/registration";
import { RegistrationProps } from "../model/types/registration";
import styles from "./RegisterForm.module.scss";

interface IRegisterFormProps {
  className?: string;
}

export const RegisterForm: FC<IRegisterFormProps> = ({ className }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onFinish: FormProps<RegistrationProps>["onFinish"] = async (values) => {
    try {
      const { username, password, name, surname, email } = values;

      if (!username || !password || !name || !surname || !email) return;

      //@ts-ignore
      await dispatch(userRegistration(values));

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const onFinishFailed: FormProps<RegistrationProps>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      className={classNames(styles.form, className)}
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<RegistrationProps>
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please input your name!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<RegistrationProps>
        label="Surname"
        name="surname"
        rules={[{ required: true, message: "Please input your surname!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<RegistrationProps>
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<RegistrationProps>
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

      <Form.Item<RegistrationProps>
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item<RegistrationProps>
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
