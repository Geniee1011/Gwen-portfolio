import React, { memo } from "react";
import { useSelector } from "react-redux";

function RightSideContent() {
  const { themeColors } = useSelector((state) => state.themeReducer);

  const approachCards = [
    {
      icon: "🧠",
      title: "Analytical Problem Solving",
      description:
        "I enjoy breaking down complex problems into manageable solutions.",
    },
    {
      icon: "🔄",
      title: "Lifelong Learning",
      description:
        "Committed to staying updated with the latest web technologies.",
    },
  ];

  const Highlight = ({ children }) => (
    <span style={{ color: themeColors.primaryColor }}>{children}</span>
  );

  return (
    <div className="lg:w-1/2">
      <div className="sticky top-24">
        <div className="mb-10">
          {/* heading */}
          <h3
            className="text-3xl font-semibold mb-6"
            style={{ color: themeColors.primaryColor }}
          >
            My Development Philosophy
          </h3>

          {/* summary  */}
          <div
            className="p-6 rounded-xl"
            style={{
              backgroundColor: `${themeColors.primaryColor}08`,
              border: `1px solid ${themeColors.border}`,
            }}
          >
            <p
              className="text-lg leading-relaxed"
              style={{ color: themeColors.summeryText }}
            >
              <li>
                <Highlight>React, Next.js, TypeScript</Highlight>: Building
                type-safe, scalable frontends. I leverage SSR and code-splitting
                to improve load performance, reduce bundle size, and boost SEO.
              </li>

              <li>
                <Highlight>Node.js, PostgreSQL, Supabase, MongoDB</Highlight>:
                Designing robust backend services and APIs. I tune queries and
                add caching to cut response times and scale throughput.
              </li>

              <li>
                <Highlight>CI/CD, GitHub Actions, Docker</Highlight>:
                Transforming code into production-ready containers. I build
                automated pipelines with rollback for fast, consistent releases.
              </li>

              <li>
                <Highlight>Redux, Jest, Cypress</Highlight>: Managing complex
                application state and enforcing quality with unit and
                integration test suites and shared code-review standards.
              </li>

              <li>
                <Highlight>Tailwind CSS, Material UI, Framer Motion</Highlight>:
                Crafting clean, animated, and accessible UIs with pixel-perfect
                fidelity from design mockups.
              </li>

              <li>
                <Highlight>Jira, Agile, GCP, AWS</Highlight>: Driving delivery
                with Agile/Scrum and shipping to the cloud, mentoring developers
                and improving accessibility and UI consistency along the way.
              </li>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {approachCards.map((card, index) => (
            <div
              key={index}
              className="p-5 rounded-lg flex flex-col"
              style={{
                backgroundColor: themeColors.bg,
                border: `1px solid ${themeColors.border}`,
              }}
            >
              <div
                className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center text-2xl"
                style={{
                  backgroundColor: `${themeColors.primaryColor}15`,
                  color: themeColors.primaryColor,
                }}
              >
                {card.icon}
              </div>
              <h4
                className="text-lg font-semibold mb-2"
                style={{ color: themeColors.primaryColor }}
              >
                {card.title}
              </h4>
              <p className="text-sm" style={{ color: themeColors.summeryText }}>
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <h4
            className="text-lg font-semibold mb-4"
            style={{ color: themeColors.primaryColor }}
          >
            Upcoming Learning Goals
          </h4>
          <div className="flex flex-wrap gap-2">
            {["Go", "Kubernetes", "GraphQL", "Cloud Architecture"].map(
              (item, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-medium rounded-full"
                  style={{
                    backgroundColor: `${themeColors.primaryColor}15`,
                    color: themeColors.primaryColor,
                    border: `1px solid ${themeColors.primaryColor}30`,
                  }}
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(RightSideContent);
