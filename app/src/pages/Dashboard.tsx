import { useEffect, useState } from "react";

type UserType = {
  id: string;
  email: string;
  name: string;
  pfp?: string;
};

const colors = {
  bg: "#F8FAFC",
  card: "#FFFFFF",
  textMain: "#0F172A",
  textSecondary: "#64748B",
  border: "#E2E8F0",
};

export default function Dashboard() {
  const [user, setUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const check = async () => {
      const token = localStorage.getItem("token");

      const res = await fetch("http://localhost:8000/onboarded", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!data.onboarded) {
        window.location.replace("/onboarding");
      }
    };

    check();
  }, []);

  useEffect(() => {
    const handleFocus = () => {
      window.location.reload(); // force full reload
    };

    window.addEventListener("pageshow", handleFocus);

    return () => {
      window.removeEventListener("pageshow", handleFocus);
    };
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tokenFromURL = params.get("token");

    // 🔥 STEP 1: if token comes from backend → save it
    if (tokenFromURL) {
      localStorage.setItem("token", tokenFromURL);
      window.history.replaceState({}, document.title, "/dashboard"); // clean URL
    }

    const token = localStorage.getItem("token");

    if (!token) {
      setLoading(false);
      return;
    }

    // 🔥 STEP 2: fetch user from backend
    fetch("http://localhost:8000/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Not authenticated");
        return res.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch(() => {
        localStorage.removeItem("token");
        setLoading(false);
      });
  }, []);

  // 🔄 LOADING
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-xl">
        Loading...
      </div>
    );
  }

  // ❌ NOT LOGGED IN
  if (!user) {
    return (
      <div className="h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-lg">Not logged in</p>
        <a href="/login" className="px-4 py-2 bg-blue-500 text-white rounded">
          Go to Login
        </a>
      </div>
    );
  }

  // 🔥 LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.replace("/");
  };

  // ✅ MAIN UI
  return (
    <div className="min-h-screen px-6 py-10" style={{ backgroundColor: colors.bg }}>
      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <img
              src={user.pfp}
              alt="user"
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <h1
                className="text-2xl font-semibold"
                style={{ color: colors.textMain }}
              >
                Welcome, {user.name}
              </h1>
              <p style={{ color: colors.textSecondary }}>
                {user.email}
              </p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-lg text-white"
            style={{ backgroundColor: "#ef4444" }}
          >
            Logout
          </button>
        </div>

        {/* CARD */}
        <div
          className="p-6 rounded-2xl border"
          style={{
            backgroundColor: colors.card,
            borderColor: colors.border,
          }}
        >
          <h2
            className="text-lg font-semibold mb-4"
            style={{ color: colors.textMain }}
          >
            User Data
          </h2>

          <pre
            className="text-sm overflow-x-auto"
            style={{ color: colors.textSecondary }}
          >
            {JSON.stringify(user, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}