import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { FidgetSpinner } from "react-loader-spinner";

const InputField = ({ label, type = "text", value, onChange }) => (
  <div className="flex flex-col mt-8 text-base text-left whitespace-nowrap text-stone-500 max-md:max-w-full">
    <label
      htmlFor={label.toLowerCase()}
      className="justify-center py-2 max-md:max-w-full"
    >
      {label}
    </label>
    <input
      type={type}
      id={label.toLowerCase()}
      value={value} // Pass value here
      onChange={onChange} // Pass onChange here
      className="p-2 mt-1 border border-solid shrink-0 h-14 rounded-xl border-stone-500 border-opacity-30 max-md:max-w-full"
    />
  </div>
);

// const PasswordRequirement = ({ text }) => (
//   <div className="flex justify-center gap-2 py-2">
//     <div className="w-2 h-2 my-auto rounded-full shrink-0 bg-stone-500 bg-opacity-60" />
//     <div>{text}</div>
//   </div>
// );

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [loading, setLoading] = useState(false); // State variable for loading

  const navigate = useNavigate();

  const signup = (event) => {
    // event.preventDefault(); // Prevent default form submission behavior

    // Check if any of the fields are empty
    if (!email || !password) {
      alert("Please fill out all the fields.");
      return; // Exit the function early if any field is empty
    }

    const data = {
      email: email,
      password: password,
    };

    // localStorage.setItem({email: "email"});
    // localStorage.setItem({password: "password"});

    axios.post("http://localhost:3001/auth", data).then((response) => {
      try {
        console.log(response.data);
        if (response.data.error) {
          alert(response.data.error);
        } else {
          alert("Successfully register, press OK to go to Login");
          navigate("/login");
        }
      } catch (error) {
        console.log("Error Signing in: " + error);
      }
    });
  };

  return (
    <main className="flex flex-col pt-4 pb-20 pl-4 pr-20 grow max-md:pr-5 max-md:max-w-full">
      {/* <header className="flex justify-center items-center w-[50px]">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3be0cf0cc439d7f3e137cba276074492f1d6a29d7859629136bbc029f4e1940c?apiKey=03f5df226c30468fbf8fdf985b85fe26&" alt="" className="w-full aspect-square" />
      </header> */}
      <section className="flex flex-col justify-end self-center mt-6 max-w-full w-[665px]">
        <div className="flex flex-col max-w-full w-[386px] mx-auto">
          <h1 className="text-3xl font-medium text-zinc-800">
            Welcome to Tiara South{" "}
          </h1>
          <p className="justify-center p-0.5 text-base underline text-neutral-900">
            <span className="text-zinc-800">Sudah berdaftar?</span>{" "}
            <a href="Login" className="text-neutral-900">
              Log in
            </a>
          </p>
        </div>
        <form>
          <InputField
            label="Email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <div className="flex flex-col mt-8 max-md:max-w-full">
            <div className="flex flex-col whitespace-nowrap">
              <div className="flex gap-5 py-0.5 pr-2.5 max-md:flex-wrap justify-between">
                <div htmlFor="password" className="text-base text-stone-500">
                  Password
                </div>
                <button className="flex gap-3 text-lg text-right text-stone-500 text-opacity-80">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5140d1751deadb6ffe6ce71941c3fdb5f2023605350f9ec7903c30d5418e27aa?apiKey=03f5df226c30468fbf8fdf985b85fe26&"
                    alt=""
                    className="w-6 shrink-0 aspect-square"
                  />
                  <span>Hide</span>
                </button>
              </div>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="p-2 mt-1 border border-solid shrink-0 h-14 rounded-xl border-stone-500 border-opacity-30 max-md:max-w-full"
              />
            </div>
          </div>
          <div className="flex gap-2 py-2 mt-8 mr-6 text-base text-zinc-800 max-md:flex-wrap max-md:mr-2.5">
            <input
              className="pt-0"
              type="checkbox"
              id="demoCheckbox"
              name="checkbox"
              value="1"
            ></input>{" "}
            <p className="max-md:max-w-full">
              I want to receive emails about the product, feature updates,
              events, and marketing promotions.
            </p>
          </div>
          <p className="justify-center py-2 mt-8 text-base underline text-neutral-900 max-md:max-w-full">
            <span className="text-zinc-800">
              By creating an account, you agree to the{" "}
            </span>
            <a href="#" className="underline text-neutral-900">
              Terms of use
            </a>{" "}
            <span className="text-zinc-800">and</span>{" "}
            <a href="#" className="underline text-neutral-900">
              Privacy Policy.
            </a>{" "}
          </p>
          <div className="flex flex-col justify-center w-64 max-w-full mx-auto mt-8 text-2xl font-medium text-center text-white">
            <button onClick={signup} className="flex flex-col justify-center px-8 py-4 bg-neutral-900 rounded-[16px] max-md:px-5 hover:underline">
              <span className="justify-center text-nowrap">
                Create an account
              </span>
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Signup;
