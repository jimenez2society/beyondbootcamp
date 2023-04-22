import React from "react";
import "./Home.css";
import {
  arrowSm,
  dotCurved,
  dotStraight,
  mainPageHeadingDesktop,
  mainPageHeadingPhone,
  mainPageHeadingTablet,
} from "../../assets/svg";
import Link from "../../components/shared/Link";
import Card from "../../components/shared/Card/Card";
import CardTitle from "../../components/shared/Card/CardTitle";
import CardContent from "../../components/shared/Card/CardContent";
function Home() {
  return (
    <div className="Home">
      <header className="Home-heading">
        <span className="mainPageHeadingDesktop">{mainPageHeadingDesktop}</span>
        <span className="mainPageHeadingTablet">{mainPageHeadingTablet}</span>
        <span className="mainPageHeadingPhone">{mainPageHeadingPhone}</span>
      </header>
      <main className="Home-main">
        <div className="dotStraight">{dotStraight}</div>
        <div className="dotCurved">{dotCurved}</div>

        <Card className="left" lg>
          <CardTitle lg center text="Skills" />
          <CardContent lg>
            Interview prepping for software engineering involves preparing for
            technical and behavioral questions that may be asked during a job
            interview. This includes studying data structures and algorithms,
            practicing coding challenges, and researching the company and role.
            It also involves improving communication skills and practicing how
            to present oneself effectively during the interview process.
            Effective interview preparation increases the chances of landing a
            job in the competitive software engineering industry.
          </CardContent>
          <Link
            title="continue"
            href="/skills"
            className="card-link lg card-link-right"
            svg={arrowSm}
          />
        </Card>
        <div className="right">
          <Card sm>
            <CardTitle sm text="Resume" />
            <CardContent sm>
              Resume events refer to activities or experiences that are added to
              a resume to highlight one's skills, qualifications, and
              achievements. The....
            </CardContent>
            <Link
              title="continue"
              href="/skills"
              className="card-link card-link-right sm"
              svg={arrowSm}
            />
          </Card>
          <Card sm>
            <CardTitle sm text="Resume" />
            <CardContent sm>
              Resume events refer to activities or experiences that are added to
              a resume to highlight one's skills, qualifications, and
              achievements. The....
            </CardContent>
            <Link
              title="continue"
              href="/skills"
              className="card-link card-link-right sm"
              svg={arrowSm}
            />
          </Card>
          <Card span sm>
            <CardTitle sm text="Resume" />
            <CardContent sm>
              Resume events refer to activities or experiences that are added to
              a resume to highlight one's skills, qualifications, and
              achievements. These can include educational accomplishments, work
              experiences, volunteer work, internships, certifications, and
              awards. Effective resume event preparation involves carefully
              selecting the most relevant and impressi...
            </CardContent>
            <Link
              title="continue"
              href="/skills"
              className="card-link card-link-right sm"
              svg={arrowSm}
            />
          </Card>
        </div>
      </main>
    </div>
  );
}

export default Home;
