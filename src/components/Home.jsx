import React from "react";
import "../styles/Home.css";
import Pic from "../assets/linkdin_pic.jpg";
import Footer from "./Footer";
import Card from "./Card";
const Home = () => {
  return (
    <>
      <div className="main">
        <div className="header">
          <h1>Software Engineer</h1>
          <h3> Front-end Web Developer</h3>
          <p>
            I am Rajan Modanwal, a passionate front-end developer with
            experience in creating engaging and performant user interfaces. I
            have a solid understanding of HTML, CSS, and JavaScript, and I am
            proficient in using React to build dynamic web applications.
          </p>
          <button>About me</button>
          <button>Github</button>
          <button>Resume</button>
          <ul className="header-link">
            <li>
              <a href="/">Facebook</a>
            </li>
            <li>
              <a href="/">Linkdin</a>
            </li>
            <li>
              <a href="/">X</a>
            </li>
            <li>
              <a href="/">Instagram</a>
            </li>
          </ul>
        </div>
        <div className="header-right">
          <img src={Pic} alt="" />
        </div>
      </div>
      <div className="card-main">
        <Card
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmjq8wd5LJ0veZnz1UR9rbuzx_KlbKOupeYw&s"
          title="Web Developer"
          description="Frontend-Developer"
          link="https://chatgpt.com/"
        />
        <Card
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMNLc9JR72z-b5R9jbQGxDPbpq1JeuALdP3A&s"
          title="Web Developer"
          description="MongoDB"
        />
        <Card
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw0uM3M25tDITF6GSHpe8TyNDGPKujgzWXkg&s"
          title="Web Developer"
          description="Node JS"
        />
        <Card
          image="https://i0.wp.com/plopdo.com/wp-content/uploads/2021/10/What-is-back-end-development-2.jpg?fit=805%2C428&ssl=1"
          title="Web Developer"
          description="Backend Developer"
        />
        <Card
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPV0S6QPMqXN7rCVsTPsQzKSWcb2mpBU6Z4Q&s"
          title="Web Developer"
          description="FullStack Developer"
        />
        <Card
          image="https://www.patterns.dev/img/reactjs/react-logo@3x.svg"
          title="Web Developer"
          description="React JS"
        />
        <Card
          image="https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg"
          title="Web Developer"
          description="JavaScript"
        />{" "}
        <Card
          image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAA1VBMVEX///8AAAALtdV4eHhRUVGrq6s2Njbg4OD5+fn//v/Dw8Pm5uaUlJSYmJi7u7vt7e20tLQAtdKjo6PLy8s1NTVgYGAlJSWIiIjw8PBbW1uBgYFWVlapqanT09M7OztycnIsLCwYGBgQEBBFRUVpaWnz/v0LCwsfHx9CQkJzc3MpKSkAtNjV9/uz4u2a2uuN1uPk/P0nvNVTx9uq5O2O3OdAvtjH7vZwyt4AtMliy9h2zd+h1ttcxd/p/vt31uBCu93p+P687O4ArddpyNXM5+yf4+aJ1On9EMPEAAAH3klEQVR4nO2a6WLiuBKFbSDBxCxeWAwEE7ZskAUSCMkkPemevv3+j3RVWmyZ1ZkmffvOnO9HbMuyLB1Kqio5hgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAT2I0ubm9u7u9mdz/r3vyf8j9j+nYHY8zLvszexgdqNVKwA9erdY82Vs5qBzorb+ex6WbcTNMPAY7mS8O0Wiha56X6OTKNM3TfbUbptlK2XClm70q/lTXDsroaUyqkX5SweVjmufszs7bHlPNpCpZdjza05ZDlfebKCfPqg7SVf0VPGe4dhlufhnB06iw+6FKI2d2d9YYkiKekU6+IlUupesvyZdLV/UXcEtrHlneWKg3Jh3Hz3sWwDIbQ3ZnDW5QeSOdfCdU2U/X4d9Kvnd37M5fXp7mbiayPdLySdfvjzVb3C+fUTy+LNMxjXyGF4Zeyh7/VvLdfXsRscrilRmd0I4Yz95UldGXl7XHUsjHvAf/m0q+D/A7yTfKPKhhjr64mcj+GH9KBzyZuZO151LJJ/gny3dzQ+px/QrGozZ/yQyf7x4eHmdL98lITl7fKbfYGNplxzmyRFG+VMvlaqU83XSObFYSOI5zQs9J+Vi5I3115chx5EJHtRx2lAcjz455IzhlrQ09W3unVb5qD9rZE2tFPr/RZC8uxlGA5WTbg2bLj7pcOermcs3G7jjhbxIkrh519RRjd7Ky9LXNGB7tBll12TC6MgShUdZJXClfKR41+dkz0SZZ8QU70rPqVsm/kK3Fvrh8LYsuO7Ymnz9QL87lZUldFrSl+KfnsmBoHUy1bTyONwh4s1qrtiKffR1f14aafMeafHRtihHk6FSMjmJqioF1+ZrnUWvKnTS0N3rJ3yGCh42d+PqCC+rEBWHSVg5PwbhZrorn3q5Vaybls85kfxMjWZXPqKoh2poy9AxNK10+oi7bFDZVEhf9nnqBkM8zEzA/bx3TyXWuT4cz9vYKv1PlP5jZ/mT5GJP5OKnew3qdcskjq8l5nldiXaTpag5O7KDSGe6Qj5Rp0ONH8VjIWGjursjXygeBzU+5e+KGa5bsSsX2+rF8orjVse0O74JZMHz+9oAtqczYKGw6Zde9jmVU2C+Q+5Tlb4XCw6tIQyiKnt5RVLMhA9E8L58vKmE93S4f1TumOnLu0+z11KMJ+RqiLZqx5zThyHZ6cm2zq5F8bS5N1J8B8xZOZGOOZ6k2RIJcKh9IoIjR6P7+bUN6Mbl9eX2dzZ5/LLbmHpp89MtfRjeyW+Uz6mIyBsyAaHUjT0vCcB+sy1eXa1SlL0Tmv0+UkuSVfB31Jo53pLp1ndf6Se0NPmPNe394nk5ZvjadPm1SqRDZ3MbsV5MvMTix2GyWryE0owStwZzNkFVmMp5bqhE6Fk0tnqwK+chEa3E3slI+WhCbK90Sy2o27g6fzf2DRy33X1w3XuSmGxY4xea9g1g+W41cUtsqny/GS9cVVqsXcCVFK7p8UbhyLOQbmom425fy0YvWNsKkk+kN1VS9EgX1q5QZdSoW40ycn1FoN3v/WAOxfCRTVbtztVU+i03GnkV++pK7D5/fEuPcJZ/6QSQqbG6bm/a4pH5MsHLcH054MBP8uiG8+9geaVK+unanu1U+fuZ3+GKe5z6DVkMRCu6TT1v3lXzNZLHCLqooVFpsvtWXBQfSbzJ21+RzM//5SBOxfBZ1LN5pt6rb5aOHSkUxDuY0QpqGQ/HYLvli78lRYTO129jUt0K+FJp6rwqdRo+ur/dsYqbkVcxad0W/xAL4vnvDT3MdYWIY5e2uwwhoCuVE+EIiXMUmsks+avI8yrgKoZSPF0dO1U661zJZnLYFZvEQ+yDr39dv7sviffT+9XXFAjX9Jn/tbsOJ5XP0jlV6O+QzZFTdMFTMG1nIRvmk5zXOYyuV+RvJZ1HGUpOlVijEshpa0EinwVC+e2UJ+PvMpmoDarFMpBjjO1Xl63KHLybIZ17IpPw6Xmhkwr5NPkdbg0RWpiKPnfLxWLymb07wsJkXt3mU16GqF4FR7ol40jAGfMYXPPW6oHcg+SazeF7eTxP6ubObdxZML75k3D2b9SLAytUoJOWxldmrlbpq0d4mX8DvnvGJ2OLnan7tlM8Q+yqDRlFtsIicV+Te18Mhz0SYgYrsu33qeJfiZxIpb/fIKdX1xfBn+K5/BrqfrbmQOfMr3/b6ka42+U7NmP7lDvlEviYmfUefu3vkCy60N+Qi+YIzrdisWYkNF5N/ynL0gpTfoj5A4S1pf3IWzwqFfZ/a6rF8Wif7nawmX3VVvlNlm2yVogaiD4675TMquegNLW27NBjG2og1z+/FMlvJrqXdHf8Qhbf5WhAznr9tSTY0LK9W7ff6wuFVitw+eo3AaByHZ+RI7MswbNIIitXwTC06lWoYqhS0UQ2rkW9k5SEdT1nlKJVoHofXyjzLcs/JN+yz8Dj6RuoP+ebgeVbFdIEM+y4dOYJ8S5huO+Vn5A/zw13Zo5rfb8vVdmD7fn5/rZ8g6PidDcl/Ie/79mrFfKJihRV84lbzYr6MAulxZvmD3MZhIsx/B6PF01T8k8Zydiu+W0K+jzF6//79+55cAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPiH8F9Q/X9X51BhJgAAAABJRU5ErkJggg=="
          title="Web Developer"
          description="CSS"
        />{" "}
        <Card
          image="https://miro.medium.com/v2/resize:fit:700/0*gtY-llyEbkeoS1Sp.png"
          title="Web Developer"
          description="Java"
        />
         <Card
          image="data:image/png;base64,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"
          title="Web Developer"
          description="DSA"
        />
      </div>

      <Footer />
    </>
  );
};

export default Home;
