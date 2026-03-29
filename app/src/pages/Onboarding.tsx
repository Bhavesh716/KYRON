import { useState ,useEffect } from "react";
import { motion } from "framer-motion";
import { FaRobot, FaGoogle, FaSlack, FaMicrosoft } from "react-icons/fa";
import { SiOpenai } from "react-icons/si";

const steps = 5;

export default function Onboarding() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<any>({});

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/login";
      return;
    }

    fetch("http://localhost:8000/check-onboarding", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.onboarded) {
          window.location.href = "/dashboard";
        }
      });
  }, []);

  const progress = ((step + 1) / steps) * 100;

  const handleChange = (k: string, v: any) => {
    setForm({ ...form, [k]: v });
  };

  const canProceed = () => {
    if (step === 0) return form.name && form.bucket && form.team;

    if (step === 2) {
      if (!form.ai) return true; // skipped

      if (form.ai === "Other") {
        return form.apiUrl && form.apiKey;
      }

      return form.model && form.apiKey;
    }

    if (step === 4) return form.workspace;

    return true;
  };

  const next = () => {
    if (!canProceed()) return;
    setStep((s) => Math.min(s + 1, steps - 1));
  };

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch("http://localhost:8000/w_company_data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          companyName: form.name,
          bucket: form.bucket,
          teamSize: form.team,
          companyDB: form.fileName || "",   // we’ll fix below
          integrations: form.integrations || [],
          ai: form.ai || "default",
          apiUrl: form.apiUrl || "",
          model: form.model || "",
          apiKey: form.apiKey || "",
          workspace: form.workspace,
        }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.detail);

      window.location.href = "/dashboard";

    } catch (err: any) {
      alert(err.message);
    }
  };

  const getFolderName = (path: string) => {
    if (!path) return "";

    return path
      .replace(/[\\/]+$/, "")     // remove trailing / or \
      .split(/[\\/]/)             // split on both separators
      .filter(Boolean)            // remove empty parts
      .pop() || "";
  };

  const prev = () => setStep((s) => Math.max(s - 1, 0));

  return (
    <div className="min-h-screen flex bg-[#F8FAFC]">

      {/* LEFT 60% */}
      <div className="w-full lg:w-[60%] px-8 sm:px-16 py-12 flex flex-col items-center">

        {/* HEADER */}
        <div className="w-full max-w-xl">

          <div className="flex items-center gap-4 mb-4">
            <img src="/favicon.png" className="w-8 h-8" />
            <h1 className="text-3xl font-bold tracking-tight">KYRON</h1>
          </div>

          <h2 className="text-base text-black mb-6">
            Help us tailor KYRON specifically for your organization
          </h2>

          {/* PROGRESS JOURNEY BAR */}
          <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden mb-10">
            <motion.div
              className="h-full rounded-full"
              style={{
                width: `${progress}%`,
                background:
                  "linear-gradient(90deg, #3B82F6, #6366F1, #8B5CF6)",
              }}
            />
          </div>
        </div>

        {/* FORM */}
        <motion.div
          key={step}
          className="w-full max-w-xl"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
        >

          {/* STEP 1 */}
          {step === 0 && (
            <div className="space-y-5 text-center">
              <h3 className="text-2xl font-semibold">Company Information</h3>

              <input
                placeholder="Company Name"
                className="w-full p-4 rounded-xl border focus:ring-2 focus:ring-blue-500"
                onChange={(e) => handleChange("name", e.target.value)}
              />

              <select
                className="w-full p-4 rounded-xl border"
                onChange={(e) => handleChange("bucket", e.target.value)}
              >
                <option value="">Select Industry</option>
                <option>FinTech</option>
                <option>SaaS</option>
                <option>Healthcare</option>
                <option>E-commerce</option>
                <option>EdTech</option>
                <option>AI / ML</option>
                <option>Logistics</option>
                <option>Manufacturing</option>
                <option>Consulting</option>
                <option>Marketing</option>
                <option>Real Estate</option>
                <option>Other</option>
              </select>

              <select
                className="w-full p-4 rounded-xl border"
                onChange={(e) => handleChange("team", e.target.value)}
              >
                <option value="">Team Size</option>
                <option>1-10</option>
                <option>10-50</option>
                <option>50-200</option>
                <option>200+</option>
              </select>
            </div>
          )}

          {/* STEP 2 */}
          {step === 1 && (
            <div className="space-y-5">
              <h3 className="text-2xl font-semibold text-center">
                Upload Company Database
              </h3>

              <div className="text-sm text-gray-600 space-y-2">
                <p className="font-semibold">Required structure:</p>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Employee Name</li>
                  <li>Manager Name</li>
                  <li>Designation & Department</li>
                  <li>Email & WhatsApp Number</li>
                  <li>Skills (comma separated)</li>
                  <li>
                    <b>Rating (1-10)</b> — used for smart task assignment
                  </li>
                </ul>

                <p className="text-xs text-red-500">
                  Poor structure may reduce execution accuracy.
                </p>
              </div>

              <input
                type="file"
                className="w-full p-4 border rounded-xl"
                onChange={(e: any) => {
                  const file = e.target.files[0];
                  if (file) {
                    handleChange("fileName", file.name);
                  }
                }}
              />
            </div>
          )}

          {/* STEP 3 */}
          {step === 2 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-center">
                Integrate your preferred AI
              </h3>

              <div className="grid grid-cols-4 gap-4">
                {[
                  { name: "ChatGPT", img: "/logos/gpt.jpg" },
                  { name: "Claude", img: "/logos/claude.png" },
                  { name: "Gemini", img: "/logos/gemini.png" },
                  { name: "Other", img: "/logos/custom.png" },
                ].map((ai) => (
                  <button
                    key={ai.name}
                    onClick={() => {
                      if (form.ai === ai.name) {
                        handleChange("ai", null);
                        handleChange("model", null);
                        handleChange("apiKey", null);
                        handleChange("apiUrl", null);
                      } else {
                        handleChange("ai", ai.name);
                      }
                    }}
                    className={`p-5 rounded-2xl border flex flex-col items-center gap-2 transition-all duration-200
                    ${
                      form.ai === ai.name
                        ? "border-blue-500 bg-gradient-to-br from-blue-100 to-purple-100 shadow-md scale-[1.03]"
                        : "bg-white hover:shadow-md hover:scale-[1.02]"
                    }`}
                  >
                    <img src={ai.img} className="w-8 h-8 object-contain" />
                    <span className="text-sm font-medium">{ai.name}</span>
                  </button>
                ))}
              </div>

              {/* IF NOT CUSTOM */}
              {form.ai !== "Other" && (
                <>
                  <select
                    className="w-full p-4 rounded-xl border"
                    onChange={(e) => handleChange("model", e.target.value)}
                  >
                    <option>Model Preference</option>
                    <option>Fastest</option>
                    <option>Most Stable</option>
                    <option>Lowest Cost</option>
                    <option>Latest</option>
                  </select>

                  <input
                    placeholder="API Key"
                    className="w-full p-4 border rounded-xl"
                    onChange={(e) => handleChange("apiKey", e.target.value)}
                  />
                </>
              )}

              {/* IF CUSTOM */}
              {form.ai === "Other" && (
                <>
                  <input
                    placeholder="Custom API Endpoint (https://...)"
                    className="w-full p-4 border rounded-xl"
                    onChange={(e) => handleChange("apiUrl", e.target.value)}
                  />

                  <input
                    placeholder="API Key"
                    className="w-full p-4 border rounded-xl"
                    onChange={(e) => handleChange("apiKey", e.target.value)}
                  />
                </>
              )}
            </div>
          )}

          {/* STEP 4 */}
          {step === 3 && (
            <div className="space-y-6 text-center">

              <h3 className="text-2xl font-semibold">
                Integrations
              </h3>

              <p className="text-sm text-gray-700 max-w-md mx-auto">
                Integrations allow KYRON to <b>communicate, assign tasks, and follow up</b> 
                 with your team automatically through different platforms.
                <br /><br />
                Example:
                <br />
                • Send task emails  
                • Notify on WhatsApp  
                • Coordinate via Slack / Teams  
              </p>

              <div className="grid grid-cols-4 gap-4">
                {[
                  { name: "Email", img: "/logos/gmail.png" },
                  { name: "WhatsApp", img: "/logos/whatsapp.png" },
                  { name: "Teams", img: "/logos/teams.png" },
                  { name: "Slack", img: "/logos/slack.png" },
                ].map((i) => {
                  const active = form.integrations?.includes(i.name);

                  return (
                    <button
                      key={i.name}
                      onClick={() => {
                        const current = form.integrations || [];

                        if (active) {
                          handleChange(
                            "integrations",
                            current.filter((x: string) => x !== i.name)
                          );
                        } else {
                          handleChange("integrations", [...current, i.name]);
                        }
                      }}
                      className={`p-5 rounded-2xl border transition-all flex flex-col items-center gap-2
                      ${
                        active
                          ? "bg-gradient-to-br from-green-100 to-blue-100 border-green-500 shadow-md scale-[1.03]"
                          : "bg-white hover:shadow-md hover:scale-[1.02]"
                      }`}
                    >
                      <img src={i.img} className="w-8 h-8 object-contain" />
                      <span className="text-sm font-medium">{i.name}</span>

                      <span className={`text-xs font-medium ${
                        active ? "text-green-600" : "text-gray-400"
                      }`}>
                        {active ? "Active" : "Inactive"}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/*step 5*/}
          {step === 4 && (
            <div className="space-y-6 text-center">

              <p className="text-sm text-gray-600 leading-relaxed max-w-md mx-auto">
                KYRON needs access to your workspace to <b>monitor, read, and manage files</b> in real-time.
                This allows AI agents to:
                <br /><br/>
                • Track ongoing work 
                • Update files automatically  
                • Execute tasks directly inside your workflow  
              </p>


              {/* BUTTON */}
              <label
                htmlFor="folderPicker"
                className="block w-full max-w-md mx-auto cursor-pointer"
              >
                <div className="px-5 py-3 rounded-2xl border-2 border-dashed border-gray-300 
                hover:border-blue-500 hover:bg-blue-50 
                transition-all duration-200 text-center">

                  <div className="text-lg font-medium mb-5">
                    Enter path to the main Workspace Folder
                  </div>

                  <input
                    placeholder="e.g. C:\Users\YourName\Projects\Company"
                    className="w-full max-w-md mx-auto p-4 rounded-xl border focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => handleChange("workspace", e.target.value)}
                  />
                </div>
              </label>

              {/* SELECTED */}
              {form.workspace && (
                <div className="mt-3 text-sm text-green-600 font-medium">
                  ✅ Connected to: {getFolderName(form.workspace)}
                </div>
              )}
            </div>
          )}

          {/* NAV */}
          <div className="flex justify-between mt-10">
            {step > 0 && <button onClick={prev}>Back</button>}

            <div className="flex gap-3">
              {[1, 2, 3].includes(step) && (
                <button
                  onClick={next}
                  className="px-4 py-2 border rounded-lg text-gray-500 hover:bg-gray-100 transition"
                >
                  Skip
                </button>
              )}

              <button
                onClick={step === 4 ? handleSubmit : next}
                disabled={!canProceed()}
                className={`px-6 py-3 rounded-xl text-white ${
                  canProceed()
                    ? "bg-blue-500 hover:scale-[1.02]"
                    : "bg-gray-300"
                }`}
              >
                {step === 4 ? "Finish Setup" : "Next"}
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* RIGHT 40% */}
      <div className="hidden lg:block w-[40%] h-screen sticky top-0 relative">
        <img
          src="/onboarding.png"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/10" />
      </div>
    </div>
  );
}