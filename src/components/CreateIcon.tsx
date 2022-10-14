import React, { useState } from "react";
import { ErrorMessage } from "./ErrorMessage";

interface CreateIconProps {
  onCreate: (userEmail: string) => void;
  key: number;
}

export function CreateIcon({ onCreate }: CreateIconProps, key: number) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    setError("");
    if (value.trim().length === 0) {
      setError("Please enter not empty data.");
      return;
    }

    if (
      !value.match(
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
      )
    ) {
      setError("Please enter valid email.");
      return;
    }

    onCreate(value);
  };

  const changeHandler = (value: string) => {
    setValue(value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        className="border py-2 px-4 mb-2 w-full outline-0"
        placeholder="Please enter your email to get more details..."
        value={value}
        onChange={(e) => changeHandler(e.target.value)}
      />
      {error && <ErrorMessage error={error} />}
      <button
        type="submit"
        className="py-2 px-4 border bg-yellow-400 hover:text-white"
      >
        Add Email
      </button>
    </form>
  );
}
