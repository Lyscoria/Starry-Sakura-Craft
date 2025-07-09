import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './intro.module.css';

const ChevronLeft = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="15,18 9,12 15,6"></polyline>
  </svg>
);

const ChevronRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="9,18 15,12 9,6"></polyline>
  </svg>
);

const User = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const ExternalLink = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15,3 21,3 21,9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const Menu = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

function IntroPage() {
  const [selectedMember, setSelectedMember] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isFlipping, setIsFlipping] = useState(false);
  const [showContent, setShowContent] = useState(true);
  const [displayMember, setDisplayMember] = useState(0);

  const members = [
    {
      id: 1,
      name: "NewMagnet",
      description: (
      <>
        服务器创始人，物理机服主，<del>最佳后勤</del><br></br>
        <a href="https://space.bilibili.com/592023224">B站主页  </a>
        <a href="http://live.bilibili.com/1713683922">
          B站直播间
        </a>
      </>
      ),
      role: "NM",
      skills: ["后勤"],
      docPath: "/docs/服成员简介/NewMagnet",
      avatar: "https://littleskin.cn/avatar/player/NewMagnet",
      cardImage: "/img/person/NewMagnet-card.png"
    },
    {
      id: 2,
      name: "LiFr",
      description: (
      <>
        网站开发者，各种领域都有所涉猎的SSC之神<br></br>
        <a href="https://space.bilibili.com/332888795">B站主页</a>
      </>
      ),
      role: "Li4",
      skills: ["建筑","指令","红石"],
      docPath: "/docs/服成员简介/LiFr",
      avatar: "https://littleskin.cn/avatar/player/LiFr",
      cardImage: "/img/person/LiFr-card.png"
    },
    {
      id: 3,
      name: "CR400BFA2021",
      description: (
      <>
        交通迷，现任腐竹，城市计划发起者<br></br>
        <a href="https://space.bilibili.com/362063911">B站主页</a>
      </>
      ),
      role: "BFA",
      skills: ["建筑","交通"],
      docPath: "/docs/服成员简介/CR400BFA2021",
      avatar: "https://littleskin.cn/avatar/player/CR400BFA2021",
      cardImage: "/img/person/CR400BFA2021-card.png"
    },
    {
      id: 4,
      name: "rhnmabj",
      description: (
      <>
        SSC掌管红石的神<br></br>
        <a href="https://space.bilibili.com/1208430901">B站主页</a>
      </>
      ),
      role: "以实玛利",
      skills: ["红石","后勤"],
      docPath: "/docs/服成员简介/rhnmabj",
      avatar: "https://littleskin.cn/avatar/player/rhnmabj",
      cardImage: "/img/person/rhnmabj-card.png"
    },
    {
      id: 5,
      name: "Alicia_X",
      description: (
      <>
        SSC建筑领域的唯一真神<br></br>
        <a href="https://space.bilibili.com/1071680567">B站主页</a>
      </>
      ),
      role: "Cl",
      skills: ["建筑"],
      docPath: "/docs/服成员简介/Alicia_X",
      avatar: "https://littleskin.cn/avatar/player/Alicia_X",
      cardImage: "/img/person/Alicia_X-card.png"
    },
    {
      id: 6,
      name: "I_Wanna_CRY",
      description: (
      <>
        城市计划规划者，<del>鸽王中的鸽王</del><br></br>
        <a href="https://space.bilibili.com/3546587596851310">B站主页</a>
      </>
      ),
      role: "IWC",
      skills: ["建筑"],
      docPath: "/docs/服成员简介/I_Wanna_CRY",
      avatar: "https://littleskin.cn/avatar/player/I_Wanna_CRY",
      cardImage: "/img/person/I_Wanna_CRY-card.png"
    },
    {
      id: 7,
      name: "EynDentle",
      description: (
      <>
        卖烤破忒头的<br></br>
        <a href="https://space.bilibili.com/1177057476">B站主页  </a>
        <a href="https://live.bilibili.com/24231739">
          B站直播间
        </a>
      </>
      ),
      role: "ED",
      skills: ["建筑","土豆"],
      docPath: "/docs/服成员简介/EynDentle",
      avatar: "https://littleskin.cn/avatar/player/EynDentle",
      cardImage: "/img/person/EynDentle-card.png"
    },
    {
      id: 8,
      name: "H_ILLusion",
      description: (
      <>
        《甲乙两队同时施工》<br></br>
        <a href="https://space.bilibili.com/1772862057">
          B站主页
        </a>
        （乱入：感谢大佬带我打乌蒙！ QAQ
      </>
      ),
      role: "光的对立面",
      skills: ["建筑", "难道说？"],
      docPath: "/docs/服成员简介/H_ILLusion",
      avatar: "https://littleskin.cn/avatar/player/H_ILLusion",
      cardImage: "/img/person/H_ILLusion-card.png"
    },
    {
      id: 9,
      name: "HdgFlsh",
      description: (
      <>
        服务端资源包配置支持，全能后勤，省实验计划致德楼负责人<br></br>
        <a href="https://space.bilibili.com/398169827">
          B站主页
        </a>
      </>
      ),
      role: "哈德狗鱼",
      skills: ["建筑","后勤","服务端配置"],
      docPath: "/docs/服成员简介/HdgFlsh",
      avatar: "https://littleskin.cn/avatar/player/HdgFlsh",
      cardImage: "/img/person/HdgFlsh-card.png"
    },
    {
      id: 10,
      name: "wsadikjl_ZXC",
      description: (
      <>
        车万人，PVZ厨，优秀后勤，<del>凝灰岩仙人</del><br></br>
        <a href="https://space.bilibili.com/1070154050">
          B站主页
        </a>
      </>
      ),
      role: "ZXC",
      skills: ["建筑","后勤","凝灰岩","baka"],
      docPath: "/docs/服成员简介/wsadikjl_ZXC",
      avatar: "https://littleskin.cn/avatar/player/wsadikjl_ZXC",
      cardImage: "/img/person/wsadikjl_ZXC-card.png"
    },
    {
      id: 11,
      name: "sedatemickey",
      description: (
      <>
        SSC服务器配置与插件的技术之神<br></br>
        <a href="https://space.bilibili.com/126049979">
          B站主页
        </a>
      </>
      ),
      role: "Mickey",
      skills: ["服务端","插件"],
      docPath: "/docs/服成员简介/sedatemickey",
      avatar: "https://littleskin.cn/avatar/player/sedatemickey",
      cardImage: "/img/person/sedatemickey-card.png"
    },
    {
      id: 12,
      name: "r000",
      description: (
      <>
        SSC掌管轰炸机的神<br></br>
        <a href="https://space.bilibili.com/502083780">
          B站主页
        </a>
      </>
      ),
      role: "凯爷",
      skills: ["轰炸机","后勤"],
      docPath: "/docs/服成员简介/r000",
      avatar: "https://littleskin.cn/avatar/player/r000",
      cardImage: "/img/person/r000-card.png"
    },
    {
      id: 13,
      name: "White_Chessman",
      description: (
      <>
        为SSC播下了二游建筑的种子<br></br>
        <a href="https://space.bilibili.com/3494365102082859">
          B站主页
        </a>
      </>
      ),
      role: "白子",
      skills: ["建筑"],
      docPath: "/docs/服成员简介/White_Chessman",
      avatar: "https://littleskin.cn/avatar/player/White_Chessman",
      cardImage: "/img/person/White_Chessman-card.png"
    },
    {
      id: 14,
      name: "Featheraaa",
      description: (
      <>
        羊驼小队队长<br></br>
        <a href="https://space.bilibili.com/581657800">
          B站主页
        </a>
      </>
      ),
      role: "羽毛",
      skills: ["建筑"],
      docPath: "/docs/服成员简介/Featheraaa",
      avatar: "https://littleskin.cn/avatar/player/Featheraaa",
      cardImage: "/img/person/Featheraaa-card.png"
    },
    {
      id: 15,
      name: "MinecraftBC",
      description: (
      <>
        服务器掌管TNT的神<br></br>
        <a href="https://space.bilibili.com/1045809793">
          B站主页
        </a>
      </>
      ),
      role: "BC",
      skills: ["TNT","小游戏","资源包"],
      docPath: "/docs/服成员简介/MinecraftBC",
      avatar: "https://littleskin.cn/avatar/player/MinecraftBC",
      cardImage: "/img/person/MinecraftBC-card.png"
    },
    {
      id: 16,
      name: "MarkBirdFly",
      description: (
      <>
        服务器插件支持与小游戏地图赞助<br></br>
        <a href="https://space.bilibili.com/696361004">
          B站主页
        </a>
      </>
      ),
      role: "MBF",
      skills: ["插件","小游戏"],
      docPath: "/docs/服成员简介/MarkBirdFly",
      avatar: "https://littleskin.cn/avatar/player/MarkBirdFly",
      cardImage: "/img/person/MarkBirdFly-card.png"
    },
    {
      id: 17,
      name: "Sakaue_Sakura",
      description: (
      <>
        1.16.1专业速通玩家<br></br>
        <a href="https://space.bilibili.com/400070584">B站主页  </a>
        <a href="https://live.bilibili.com/1970740920">
          B站直播间
        </a>
      </>
      ),
      role: "sakura酱",
      skills: ["速通","建筑"],
      docPath: "/docs/服成员简介/Sakaue_Sakura",
      avatar: "https://littleskin.cn/avatar/player/Sakaue_Sakura",
      cardImage: "/img/person/Sakaue_Sakura-card.png"
    },
    {
      id: 18,
      name: "192024stx",
      description: (
      <>
        最伟大的工人！<br></br>
        <a href="https://space.bilibili.com/3546756046391592">
          B站主页
        </a>
      </>
      ),
      role: "stx",
      skills: ["建筑","后勤"],
      docPath: "/docs/服成员简介/192024stx",
      avatar: "https://littleskin.cn/avatar/player/192024stx",
      cardImage: "/img/person/192024stx-card.png"
    },
    {
      id: 19,
      name: "ShUodeDa0lI",
      description: (
      <>
        欢迎光临小酒馆！<br></br>
        <a href="https://space.bilibili.com/512131051">B站主页  </a>
        <a href="https://live.bilibili.com/1791269014">
          B站直播间
        </a>
      </>
      ),
      role: "薯薯",
      skills: ["建筑"],
      docPath: "/docs/服成员简介/ShUodeDa0lI",
      avatar: "https://littleskin.cn/avatar/player/ShUodeDa0lI",
      cardImage: "/img/person/ShUodeDa0lI-card.png"
    },
    {
      id: 20,
      name: "LiFv",
      description: (
      <>
        LiFr的弟弟，小建筑热爱者<br></br>
      </>
      ),
      role: "Li5",
      skills: ["建筑"],
      docPath: "/docs/服成员简介/LiFv",
      avatar: "https://littleskin.cn/avatar/player/LiFv",
      cardImage: "/img/person/LiFv-card.png"
    },
    {
      id: 21,
      name: "a350_ti",
      description: (
      <>
        LDC服务器腐竹<br></br>
        <a href="https://space.bilibili.com/396751291">
          B站主页
        </a>
      </>
      ),
      role: "swk",
      skills: ["插件"],
      docPath: "/docs/服成员简介/a350_ti",
      avatar: "https://littleskin.cn/avatar/player/a350_ti",
      cardImage: "/img/person/a350_ti-card.png"
    },
  ];

  const handleMemberSelect = (index) => {
    if (index === selectedMember || isFlipping) return;
    
    setSelectedMember(index);
    setIsFlipping(true);

    setTimeout(() => setShowContent(false), 150);
    setTimeout(() => setDisplayMember(index), 300);
    setTimeout(() => setShowContent(true), 450);
    setTimeout(() => setIsFlipping(false), 600);
  };

  const currentMember = members[displayMember];

  return (
    <Layout>
      <div className={styles.container}>
        <div className={`${styles.sidebar} ${!sidebarOpen ? styles.sidebarClosed : ''}`}>
          <div className={styles.mobileHeader}>
            <div className={styles.mobileTitle}>
              <Menu size={18} />
              <span>成员列表</span>
            </div>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className={styles.mobileToggle}
            >
              {sidebarOpen ? <ChevronLeft /> : <ChevronRight />}
            </button>
          </div>

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className={styles.sidebarToggle}
          >
            {sidebarOpen ? <ChevronLeft /> : <ChevronRight />}
          </button>

          <div className={`${styles.sidebarContent} ${!sidebarOpen ? styles.sidebarContentHidden : styles.sidebarContentVisible}`}>
            <div className={styles.sidebarHeader}>
              <h2>成员列表</h2>
            </div>

            <div className={styles.memberList}>
              {members.map((member, index) => (
                <button
                  key={member.id}
                  onClick={() => handleMemberSelect(index)}
                  disabled={isFlipping}
                  className={`${styles.memberButton} ${
                    selectedMember === index ? styles.memberButtonActive : ''
                  } ${isFlipping ? styles.memberButtonDisabled : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={styles.avatar}>
                    <img 
                      src={member.avatar} 
                      alt={member.name}
                      className={styles.avatarImage}
                    />
                  </div>
                  
                  <div className={styles.memberInfo}>
                    <div className={styles.memberName}>
                      {member.name}
                    </div>
                    <div className={styles.memberRole}>
                      {member.role}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className={`${styles.mainContent} ${!sidebarOpen ? styles.mainContentExpanded : ''}`}>
          <div className={styles.header}>
            <h1>成员介绍！</h1>
            <p>看看服务器里都有谁吧</p>
          </div>

          <div className={styles.cardContainer}>
            <div className={`${styles.memberCard} ${isFlipping ? styles.flipping : ''}`}>
              <div className={styles.cardHeader}>
                <div className={`${styles.cardContent} ${!showContent ? styles.contentHidden : ''}`}>
                  <h2 className={styles.cardTitle}>
                    {currentMember.name}
                  </h2>
                  <p className={styles.cardRole}>
                    {currentMember.role}
                  </p>
                </div>
              </div>

              <div className={styles.cardBody}>
                <div className={`${styles.cardContent} ${!showContent ? styles.contentHidden : ''}`}>
                  <div className={styles.cardImage}>
                    <img 
                      src={currentMember.cardImage}
                      alt={currentMember.name}
                      className={styles.cardImagePhoto}
                    />
                  </div>

                  <p className={styles.cardDescription}>
                    {currentMember.description}
                  </p>

                  <div className={styles.skillsContainer}>
                    <h4>Tags：</h4>
                    <div className={styles.skills}>
                      {currentMember.skills.map((skill, index) => (
                        <span key={`${currentMember.id}-${skill}-${index}`} className={styles.skillTag}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link 
                    to={currentMember.docPath}
                    className={styles.detailButton}
                  >
                    <span>详细信息</span>
                    <ExternalLink size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default IntroPage;