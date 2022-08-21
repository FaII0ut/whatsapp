import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import dynamic from 'next/dynamic'
import { userState } from "../store/atoms/user";
import axios from "../api/axios";

const useAuth = () => {
    const [user, setUser] = useRecoilState(userState);

    const [checkingAuth, setCheckingAuth] = useState(true);
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (user) {
            setCheckingAuth(false);
        }
    }, [user]);

    // login function
    const login = async (email: string, password: string) => {
        setLoading(true);
        try {
            await csrf();
            const response = await axios.post("api/auth/login", {
                email: email,
                password: password,
            });
            if (response.status === 200) {
                Router.push('/')
            }
            setCheckingAuth(false);
            // setLoading(false);
            setCheckingAuth(false);
            // trypp();
        } catch (error) {
            setLoading(false);
            // setMessage("Login failed");
            console.log(error);
            setCheckingAuth(false);
        }
    };

    const csrf = async () => { await axios.get("/sanctum/csrf-cookie") };

    // logout function
    const logout = async () => {
        const response = await axios.post("/auth/logout");
        // removeCookie()
        document.cookie.split(";").forEach(function (c) {
            document.cookie = c
                .replace(/^ +/, "")
                .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
        });
        // setPermissions([]);
        Router.push("/login");
    };

    return {
        login,
        logout,
    };
};

export default useAuth;