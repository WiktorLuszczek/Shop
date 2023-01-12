import React, { FormEvent } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../../schema/schema";

export const Newsletter = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const onSubmit = (data: {name: string, email: string}) => {
    console.log(data)
  }
  return (
    <div className="text-center">
      <div className="">Newsletter</div>
        <form onSubmit={handleSubmit(onSubmit)}>

          <input className="text-black block mx-auto m-1" type="name" placeholder="Name..." {...register("name")} />

          <span className="">{errors?.name?.message}</span>

          <input className="text-black block mx-auto m-1" type="text" placeholder="Email..." {...register("email")} />

          <span className="">{errors?.email?.message}</span>

          <input className="cursor-pointer" type="submit" id="submit" value="Subscribe!"/>
        </form>
    </div>
  );
};
