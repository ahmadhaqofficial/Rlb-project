import React from "react";
import logo from "../assets/navbarlogo.png";
import background from "../assets/backgroudnavbar.png";
import navright from "../assets/navright.png";
import card from "../assets/card.png";
import left from "../assets/left.png";
import back from "../assets/back.png";
import right from "../assets/right.png";
import vaccinces from "../assets/vaccinces.png";

export default function Home() {
  return (
    <div className="rlb__project">
      <div className="img_nav">
        <img className="body__img" src={background} alt="" />
      </div>
      <div className="rlb__project__all">
        <div className="rlb__project__navbar">
          <div className="rlb__project__navbar__logo">
            <img src={logo} alt="" />
          </div>
          <div className="rlb__project__navbar__button">
            <a href="">Jobs</a>
            <a href="">Professionals</a>
            <a href="">traineeships</a>
            <a href="">Clients</a>
            <a href="">About us</a>
          </div>
        </div>
        <div className="rlb__content__main">
          <div className=" rlb__content__main__left">
            <div className="rlb__heading">
              Get the Best Job <br />
              <span>You Deserve</span>
            </div>
            <div className="rlb__content">
              Tell us who you are and let us <br />
              find the best job for you!
            </div>
            <div className="rlb__content__btn">
              <button className="btn">See more</button>
              <div className="rlb__content__img">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-arrow-right"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </div>
          </div>
          <div>
            <img className="img__content" src={navright} alt="" />
          </div>
        </div>
      </div>

      <div className="choose__friend">Choose your friend</div>
      <div className="choose__friend__all">
        <div className="choose_card">
          <img src={card} alt="" />
          <button className="manager__button">Manager Field Service</button>
        </div>
        <div className="choose_card">
          <img src={card} alt="" />
          <button className="manager__button">Manager Field Service</button>
        </div>
        <div className="choose_card">
          <img src={card} alt="" />
          <button className="manager__button">Manager Field Service</button>
        </div>
      </div>
      <div className="choose__friend__all">
        <div className="choose_card">
          <img src={card} alt="" />
          <button className="manager__button">Manager Field Service</button>
        </div>
        <div className="choose_card">
          <img src={card} alt="" />
          <button className="manager__button">Manager Field Service</button>
        </div>
        <div className="choose_card">
          <img src={card} alt="" />
          <button className="manager__button">Manager Field Service</button>
        </div>
      </div>
      <div className="find__button">
        <button className="button">Find 1676 Technical Vacanciess</button>
      </div>

      <div className="back__img">
        <img src={back} alt="" />

        <div className="find__jobs__main">
          <img src={left} alt="" />

          <div className="find__jobs__headimg">We find the job for you</div>
          <div className="find__jobs__content">
            Sign up as a job seeker and put us to work.
          </div>
          <div className="find__jobs__button">
            <button> Register Directly</button>
          </div>
        </div>
      </div>

      <div className="how__it__works">How it Works</div>
      <div className="how__it__svg__main">
        <div className="how__it__svg">
          <svg
            id="Group_1"
            data-name="Group 1"
            xmlns="http://www.w3.org/2000/svg"
            width="44.871"
            height="44.861"
            viewBox="0 0 83.871 52.861"
          >
            <path
              id="Path_212"
              data-name="Path 212"
              d="M207.351,417.784q-18.01,0-36.022-.006c-4.539-.007-5.531-.986-5.537-5.448q-.028-21.164-.012-42.327c0-3.854,1.077-5.048,4.876-5.052q37.061-.05,74.122,0c3.763,0,4.857,1.224,4.861,5.077q.017,21.164-.008,42.327c-.006,4.448-1,5.418-5.565,5.424Q225.709,417.8,207.351,417.784Zm-38.85-46.4c-.1,1.389-.234,2.379-.235,3.37-.014,12.262.094,24.524-.078,36.783-.044,3.2,1.144,3.825,4.042,3.813q35.51-.145,71.022,0c2.98.013,4.019-.755,3.978-3.878-.165-12.259-.061-24.522-.079-36.784,0-.962-.169-1.923-.3-3.267-1.405.767-2.412,1.279-3.382,1.853-10.728,6.345-21.489,12.634-32.14,19.1-2.138,1.3-3.686,1.417-5.892.114-11.029-6.514-22.168-12.84-33.276-19.219C171.1,372.666,169.975,372.144,168.5,371.386Zm78.243-3.052-.27-.686H168.851l-.327.77a9.6,9.6,0,0,1,.967.428c12.372,7.162,24.716,14.374,37.16,21.408a4.766,4.766,0,0,0,3.952-.347c9.668-5.621,19.246-11.4,28.844-17.14C241.89,371.306,244.313,369.813,246.745,368.334Z"
              transform="translate(-165.776 -364.926)"
              fill="#ee7a27"
            />
          </svg>
          <div>Application</div>
        </div>
        <div className="how__it__svg">
          <svg
            id="Group_2"
            data-name="Group 2"
            xmlns="http://www.w3.org/2000/svg"
            width="44.18"
            height="44.431"
            viewBox="0 0 74.18 66.431"
          >
            <path
              id="Path_213"
              data-name="Path 213"
              d="M319.83,431.833V417.88a14.906,14.906,0,0,0-2.314-.532c-7.925-.387-7.928-.378-7.929-8.173q0-18.274,0-36.55c.008-6.045.493-6.541,6.339-6.543q30.868-.01,61.736,0c5.359,0,6.062.664,6.074,5.93q.045,19.8,0,39.6c-.012,4.969-.787,5.693-5.871,5.7-12.9.018-25.8-.09-38.692.113a9.223,9.223,0,0,0-5.549,2.356c-3.409,3.122-6.4,6.695-9.609,10.043-.926.969-2,1.795-3.009,2.686Zm-7.782-63.553v46.651a33.788,33.788,0,0,0,4.514.188c3.651-.342,5.386.9,5.073,4.867-.2,2.51.313,5.076.587,8.675,3.748-3.936,6.577-7.4,9.934-10.241a12.552,12.552,0,0,1,7.07-3.126c12.745-.3,25.5-.239,38.254-.08,3.248.04,4.212-.962,4.168-4.211-.172-12.761-.222-25.529.021-38.288.074-3.9-1.17-4.91-4.93-4.88-20,.161-40,.068-59.995.091C315.2,367.929,313.658,368.154,312.048,368.28Z"
              transform="translate(-309.583 -366.076)"
              fill="#ee7a27"
            />
          </svg>

          <div>Conversation</div>
        </div>
        <div className="how__it__svg">
          <svg
            id="Group_3"
            data-name="Group 3"
            xmlns="http://www.w3.org/2000/svg"
            width="44.843"
            height="44.782"
            viewBox="0 0 75.843 64.782"
          >
            <path
              id="Path_214"
              data-name="Path 214"
              d="M470.342,364.415c0-3.277-.117-5.945.024-8.6.308-5.777,3.048-8.459,8.779-8.564q7.622-.139,15.249,0c5.707.105,8.422,2.772,8.76,8.592.155,2.652.026,5.321.026,8.57,5.635,0,10.952.148,16.256-.049,3.821-.142,5.293,1.31,5.248,5.179q-.221,18.849-.01,37.7c.033,3.446-1.192,4.734-4.687,4.719q-33.254-.151-66.509,0c-3.541.017-4.668-1.363-4.635-4.764q.18-19.061.007-38.126c-.028-3.511,1.462-4.778,4.84-4.694C459.03,364.513,464.377,364.415,470.342,364.415Zm16.427,45.717c10.593,0,21.187-.091,31.778.056,3.124.043,4.242-1,4.209-4.136q-.182-17.794,0-35.591c.033-3.061-1.181-3.773-4.021-3.761q-31.989.14-63.98,0c-2.862-.012-4.027.735-3.994,3.778q.194,17.794,0,35.591c-.032,3.151,1.113,4.163,4.224,4.12C465.581,410.041,476.176,410.132,486.768,410.132Zm14.078-45.923c0-3.251.041-6.187-.01-9.12-.063-3.569-2.111-5.647-5.483-5.79-5.777-.245-11.579-.223-17.357.017a5.118,5.118,0,0,0-5.246,5.105c-.188,3.19-.042,6.4-.042,9.788Z"
              transform="translate(-448.843 -347.182)"
              fill="#ee7a27"
            />
          </svg>

          <div>Your job</div>
        </div>
        <div className="how__it__svg">
          <svg
            id="Group_4"
            data-name="Group 4"
            xmlns="http://www.w3.org/2000/svg"
            width="44.29"
            height="44.006"
            viewBox="0 0 80.29 72.006"
          >
            <path
              id="Path_215"
              data-name="Path 215"
              d="M63.525,362.056q17.07,0,34.139,0c4.825,0,5.839,1.04,5.84,5.921q0,22.09,0,44.179c0,4.527-.944,5.481-5.383,5.506-5.494.031-5.5.031-5.6,5.622-.049,2.76-.012,5.524-.134,8.281a10.71,10.71,0,0,1-.725,2.492,8.757,8.757,0,0,1-2.252-1.23c-4.32-4.435-8.611-8.9-12.817-13.442a5.109,5.109,0,0,0-4.15-1.756c-14.642.058-29.285.039-43.928.029-4.269,0-5.294-1.047-5.3-5.341q-.007-22.466,0-44.932c0-4.154,1.168-5.32,5.414-5.326Q46.08,362.036,63.525,362.056Zm25.967,67.449.682-.274c0-2.083-.107-4.175.019-6.25.485-7.969-1-7.837,7.917-7.669,2.2.041,3.069-.477,3.051-2.907q-.164-22.449-.01-44.9c.014-2.376-.68-3.2-3.122-3.193-23.077.073-46.154.042-69.231.047-3.119,0-3.178.069-3.179,3.288,0,14.8.057,29.6-.058,44.4-.019,2.535.7,3.3,3.236,3.279,14.464-.1,28.93.012,43.394-.1a7.871,7.871,0,0,1,6.54,2.85C82.2,421.989,85.892,425.7,89.492,429.505Z"
              transform="translate(-23.215 -362.052)"
              fill="#ee7a27"
            />
            <path
              id="Path_216"
              data-name="Path 216"
              d="M75.763,400.166c0-.669.053-1.344-.01-2.007-.165-1.743.491-2.462,2.334-2.726a7.341,7.341,0,0,0,6.214-6.891,7.694,7.694,0,0,0-4.9-7.463,7.424,7.424,0,0,0-8.652,2.814c-.7,1.08-.872,2.491-1.426,3.686a8.535,8.535,0,0,1-1.343,1.659c-.312-.685-.927-1.389-.885-2.051a9.584,9.584,0,0,1,8.522-8.764c5.074-.442,9.408,2.357,10.631,6.868,1.316,4.853-.748,10.011-5.34,11.616-2.817.985-3.321,2.487-3.006,4.945a2.273,2.273,0,0,1-.044,1.237,7.512,7.512,0,0,1-1.113,1.326c-.319-.413-.849-.8-.914-1.245a21.486,21.486,0,0,1-.043-3Z"
              transform="translate(-36.692 -367.066)"
              fill="#ee7a27"
            />
          </svg>

          <div>Guidance</div>
        </div>
        <div className="how__it__svg">
          <svg
            id="Group_5"
            data-name="Group 5"
            xmlns="http://www.w3.org/2000/svg"
            width="44.992"
            height="44.135"
            viewBox="0 0 79.992 70.135"
          >
            <path
              id="Path_217"
              data-name="Path 217"
              d="M612.026,357.7c1.143.868,1.858,1.348,2.5,1.912q16.8,14.689,33.586,29.4c2.915,2.557,3.03,5.416.155,7.953q-17,15.007-34.11,29.895a8.431,8.431,0,0,1-2.045.976,8.4,8.4,0,0,1-.769-2.322c-.084-3.438-.165-6.886.008-10.318.117-2.323-.436-3.163-3-3.126-11.2.161-22.4.073-33.6.066-3.646,0-4.371-.723-4.373-4.326q-.009-14.76,0-29.521c0-3.489.588-4.088,4-4.091q16.921-.014,33.841-.006c3.1,0,3.1-.008,3.1-3.2,0-3.44-.037-6.881.029-10.32A16.757,16.757,0,0,1,612.026,357.7Zm1.594,66.346c1.189-.985,1.786-1.456,2.358-1.956q14.985-13.111,29.967-26.226c2.6-2.274,2.623-3.236.037-5.511q-11.707-10.3-23.419-20.593c-2.745-2.414-5.488-4.831-8.653-7.616-.116,1.293-.234,2.043-.24,2.794-.023,2.8,0,5.6-.011,8.4-.008,3.186-.052,3.239-3.2,3.241-11.757.006-23.513.043-35.269-.038-1.891-.013-2.47.535-2.453,2.425.082,9.356.114,18.715-.018,28.07-.033,2.324.807,2.771,2.9,2.755,11.356-.085,22.712-.041,34.069-.04,3.929,0,3.931,0,3.932,3.872C613.621,416.857,613.62,420.1,613.62,424.042Z"
              transform="translate(-570.373 -357.696)"
              fill="#ee7a27"
            />
          </svg>

          <div>Continued</div>
        </div>
      </div>

      <div className="do__you__have__main">
        <img src={right} alt="" />
        <div className="do__you__second">
          <div className="do__you__have__heading">Do you have a question?</div>
          <div className="do__you__have__content">
            Let us know and you'll hear from us soon!
          </div>
          <div className="do__you__button">
            <button> Get in touch</button>
          </div>
        </div>
      </div>

      <div className="all__vaccines__main">
        <img src={vaccinces} alt="" />
        <div className="vaccines__heading">
          You know what you want and we <br />
          know where to do it.
        </div>
        <div className="vaccieces__boxes">
         
        <div className="vaccieces__number">
        1853 <br />Technical vacancies
        </div>
        <div className="vaccieces__number">
        1566 <br />Successes 
        </div>
        <div className="vaccieces__number">
        2531 <br />Different employers
        </div>
        </div>
      </div>
    </div>
  );
}
