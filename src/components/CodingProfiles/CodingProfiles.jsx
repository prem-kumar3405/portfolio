import "./CodingProfiles.css";
import knightBadge from "../../assets/knight.gif";

function CodingProfiles() {
  return (
    <section id="coding" className="coding">

      <h2 className="section-title">
        Coding Profiles
      </h2>

      <p className="coding-subtitle">
        Passionate Competitive Programmer with strong problem-solving
        skills and expertise in Data Structures & Algorithms.
      </p>

      <div className="coding-grid">

        {/* LeetCode Card */}

        <div className="profile-card leetcode-card">

          <img
            src={knightBadge}
            alt="LeetCode Knight Badge"
            className="badge-image"
          />

          <h3>🏆 LeetCode Knight</h3>

          <p className="username">
            @prem_cse_03
          </p>

          <p className="description">
            Earned the prestigious Knight Badge through consistent
            contest participation and advanced problem-solving.
          </p>

          <div className="profile-stats">

            <div className="stat-box">
              <h4>1000+</h4>
              <span>Problems</span>
            </div>

            <div className="stat-box">
              <h4>500+</h4>
              <span>Day Streak</span>
            </div>

            <div className="stat-box">
              <h4>Knight</h4>
              <span>Badge</span>
            </div>

          </div>

          <a
            href="https://leetcode.com/u/prem_cse_03/"
            target="_blank"
            rel="noreferrer"
            className="profile-btn"
          >
            Visit LeetCode
          </a>

        </div>

        {/* CodeChef Card */}

        <div className="profile-card">

          <h3>⭐ CodeChef</h3>

          <p className="username">
            @prem3405
          </p>

          <p className="description">
            Active competitive programmer with a
            2-Star CodeChef rating and strong
            algorithmic problem-solving skills.
          </p>

          <div className="profile-stats">

            <div className="stat-box">
              <h4>2★</h4>
              <span>Rating</span>
            </div>

            <div className="stat-box">
              <h4>CP</h4>
              <span>Active</span>
            </div>

          </div>

          <a
            href="https://www.codechef.com/users/prem3405"
            target="_blank"
            rel="noreferrer"
            className="profile-btn"
          >
            Visit CodeChef
          </a>

        </div>

      </div>

      <div className="achievement-banner">

        <h3>
          Competitive Programming Achievements
        </h3>

        <div className="achievement-grid">

          <div className="achievement-card">
            🔥 500+ Day Coding Streak
          </div>

          <div className="achievement-card">
            🏆 LeetCode Knight Badge
          </div>

          <div className="achievement-card">
            💻 1000+ Problems Solved
          </div>

          <div className="achievement-card">
            ⭐ 2-Star CodeChef
          </div>

          <div className="achievement-card">
            🚀 Strong in DSA
          </div>

          <div className="achievement-card">
            📈 Consistent Contest Participant
          </div>

        </div>

      </div>

    </section>
  );
}

export default CodingProfiles;