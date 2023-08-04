import { Button } from "antd";
import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";
import Head from "next/head";
import styles from "@/styles/Login.module.css";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    createUserWithEmailAndPassword(data.email, data.password);
  };

  return (
    <div>
      <Head>
        <title>Next Login</title>
      </Head>
      <div className={styles.form}>
        <h3>LOGIN</h3>
        <div className={styles.social_icons}>
          <GoogleOutlined
            onClick={() =>
              signIn("google", {
                callbackUrl: "https://pc-builders.vercel.app/",
              })
            }
          />
          <GithubOutlined
            onClick={() =>
              signIn("github", {
                callbackUrl: "https://pc-builders.vercel.app/",
              })
            }
          />
        </div>
        <hr />
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="">Your Email</label>
          <input {...register("email", { required: true })} type="email" />
          <label htmlFor="">Your Password</label>
          <input
            {...register("password", { required: true })}
            type="password"
          />
          <Button>Login</Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
