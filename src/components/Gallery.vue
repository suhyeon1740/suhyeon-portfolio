<template lang="html">
    <div id="gallery" class="waypoint animated" data-animated="slideUp">
            <project
            v-for="project in projects"
            v-bind:key="project.id"
            v-bind:project ="project"
            :style="{'background-image': 'url(' + require('../assets/images/project/'+project.src[0].file) + ')'}"
            @child-event="popupShow">

            </project>
    </div>
</template>

<script>
import eventBus from '../EventBus'
import Project from './Project.vue'

export default {
    name : 'gallery',
    components : {Project},
    data : function() {
        return {
            projects : [
               {
                   id:0,
                   name:'철도역사 안전관리 자동화 기술개발',
                   language:'PHP JQuery Android',
                   description : '철도역사에서 발생할 수 있는 다양한 돌발상황 발생 시 사용자가 웹 또는 앱으로 실시간 확인이 가능한 시스템.<br>'+
                                   '화면중앙에 ActiveX 띄워 실시간 카메라영상을 재생하며 선로침입 등 이벤트 발생 시 이벤트신호를 ActiveX를 통해 수신한다. <br>'+
                                   '이벤트 신호 수신 시 웹에서는 해당위치의 카메라 영상이 단일화면으로 재생되며 앱으로는 푸시알림을 전송하고 상황내용을 인지할 수 있게 상세정보화면을 제공한다. <br>'+
                                   '푸시알림은 FCM API를 사용하였으며 앱은 Android의 Web View를 사용한 하이브리드 앱이다.',
                   src : [
                       {
                           file : 'korail_main.jpg',
                           width : '100%'
                       },
                       {
                           file : 'korail_push.jpg',
                           width : '35%'
                       },
                       {
                           file : 'korail_app_list.png',
                           width : '35%'
                       },
                       {
                           file : 'korail_app_view.png',
                           width : '35%'
                       }
                   ]
               },
               {
                   id:1,
                   name:'지능형 출입통제 시스템',
                   language : 'PHP JQuery Unity',
                   description : '비콘으로 출입자의 실시간 위치를 기록하여 3D Map에 출입자 위치를 표시해 출입자 감시가 가능한 시스템.<br>'+
                                    '2초마다 출입자의 실시간 위치가 업데이트되며 사용자별 이동경로 검색이 가능하다.<br>'+
                                    '관리자가 설정한 비인가구역에 출입자가 접근 시 화면에 경고창을 표시하여 관리자에게 알린다.<br>'+
                                    '화면 좌측(층 선택영역)은 html이며 화면 우측(3D Map 영역)은 unity로 개발되었다.',
                   src : [
                       {
                           file : 'iot_main.png',
                           width : '100%'
                       },
                       {
                           file : 'iot_moving_route.png',
                           width : '100%'
                       },
                       {
                           file : 'iot_popup.png',
                           width : '100%'
                       }
                   ]
               },
               {
                   id:2,
                   name:'EV충전소 종합정보표시시스템',
                   language : 'PHP JQuery',
                   description : 'EV충전소에 설치된 키오스크로 EV충전소 사용자에게 오늘의 날씨, 관광명소, 맛집정보등을 제공하는 시스템.<br>'+
                                    '관리자웹에서는 관광명소, 맛집, 공지사항 게시물을 작성과 키오스크 on/off 제어 및 상태 확인이 가능하다.<br>'+
                                    '키오스크에서는 관리자가 등록한 게시글 확인이 가능하며 문의사항을 작성 할 수 있다.<br>'+
                                    '5분이상 키오스크 사용이 없으면 메인화면과 시스템 안내 방송이 재생되며 화면 터치 시 메뉴화면으로 이동된다.',
                   src : [
                       {
                           file : 'ev_list.png',
                           width : '100%'
                       },
                       {
                           file : 'ev_more.png',
                           width : '100%'
                       },
                       {
                           file : 'ev_kiosk_more.jpg',
                           width : '35%'
                       },
                       {
                           file : 'ev_qna.jpg',
                           width : '35%'
                       },
                       {
                           file : 'ev_kiosk_main.jpg',
                           width : '35%'
                       },
                       {
                           file : 'ev_kiosk_menu.jpg',
                           width : '35%'
                       }
                   ]
               },
               {
                   id:3,
                   name:'울타리감시시스템',
                   language : 'PHP JQuery',
                   description : '울타리 영역에서 침입 이벤트 발생 시 관제 웹에서 연계 카메라영상과 발생 위치를 표시하여 신속히 이벤트 확인이 가능한 시스템.<br>'+
                                    '모니터링화면과 장비설정화면 개발을 담당하였다.장비설정화면에서는 jquery ui를 사용하여 장비 아이콘 drag&drop이 <br>'+
                                    '가능도록 구현하였으며 사용자가 원하는 위치에 장비를 배치할 수 있다.<br>'+
                                    '모니터링화면에서는 장비설정에서 배치한 장비를 보여주며 이벤트 발생 시 해당 장비를 깜빡이여 사용자에게 발생 위치를 알려준다.',
                   src : [
                       {
                           file : 'ultali_main.jpg',
                           width : '100%'
                       },
                       {
                           file : 'ultali_equip_set.png',
                           width : '100%'
                       },
                       {
                           file : 'ultali_log.png',
                           width : '100%'
                       }
                   ]
               },
               // {
               //     id:4,
               //     name:'원방감시시스템',
               //     language:'',
               //     description:'',
               //     src : [
               //         {
               //             file : 'wonbang_main.jpg',
               //             width : '100%'
               //         }
               //     ]
               // },
               {
                   id:4,
                   name:'포트폴리오',
                   language:'VUE',
                   description:'vue로 개발한 개인 포트폴리오 사이트이다.<br>'+
                                '반응형 웹이며 웹 디자인은 http://findmatthew.com/를 참고하였다.',
                   src : [
                       {
                           file : 'portfolio_main.jpg',
                           width : '100%'
                       },
                       {
                           file : 'portfolio_skills.jpg',
                           width : '100%'
                       }
                   ]
               }
           ]
        }
    },
    methods : {
        popupShow : function(key) {
            eventBus.$emit('popup-show',this.projects[key]);
        }
    }
}
</script>

<style lang="css" scoped>
#gallery {
    width: 100%;
    height: 100%;
    margin-top: 100px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    animation-delay: .5s;
}
.project {
    width: 380px;
    height: 250px;
    transition:all 0.3s;

}
.project {
    background-size: 380px 250px;
}
.project:hover {
    box-shadow: inset 0 0 0 1000px rgba(0,0,0,.5);
}
.more-btn {
    cursor: pointer;
}
@media screen and (max-width:740px) {
    #gallery {
        margin-top: 50px;
    }
    .project {
        margin-top : 1px;
    }
}
</style>
