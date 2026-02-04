import { RouteRecordRaw } from 'vue-router';
import {
  HomeOutlined,
  SettingOutlined,
  UserOutlined,
  ContactsOutlined,
  UndoOutlined,
  PlusOutlined,
  WechatOutlined,
  CustomerServiceOutlined,
  ContainerOutlined,
  LikeOutlined,
  DashboardOutlined,
  AimOutlined,
  GlobalOutlined,
} from '@vicons/antd';
export const Routes: RouteRecordRaw[] = [
  {
    path: 'dashboard',
    name: 'dashboard',
    component: () => import('@/views/dashboard/index.vue'),
    meta: {
      title: '欢迎页',
      icon: HomeOutlined,
    },
  },
  {
    path: 'chat',
    name: 'chat',
    component: () => import('@/views/chat/index.vue'),
    meta: {
      title: '聊天页面',
      icon: WechatOutlined,
      permission: 'ChatProject.PlatService.PlatServices.ChatRoom',
      keepAlive: true,
    },
  },
  {
    path: 'function',
    name: 'function',
    redirect: '/function/plat',
    meta: {
      title: '功能配置',
      permission: 'ChatProject.PlatSetting',
      icon: GlobalOutlined,
    },
    children: [
      {
        path: 'platConfigList',
        name: 'platConfigList',
        component: () => import('@/views/function/plat/index.vue'),
        meta: {
          title: '平台配置',
          permission: 'ChatProject.PlatSetting.List',
          icon: ContainerOutlined,
        },
      },
      {
        path: 'platManage',
        name: 'platManage',
        redirect: '/function/platConfigList',
        meta: {
          title: '平台配置',
          permission: 'ChatProject.PlatSetting.PlatSettings',
          icon: UserOutlined,
          hideInMenu: true,
        },
        children: [
          {
            path: 'create',
            name: 'platConfigCreate',
            component: () => import('@/views/function/plat/update.vue'),
            meta: {
              title: '平台配置-创建',
              permission: 'ChatProject.PlatSetting.Create',
              icon: PlusOutlined,
              hideInMenu: true,
            },
          },
          {
            path: 'edit',
            name: 'platConfigUpdate',
            component: () => import('@/views/function/plat/update.vue'),
            meta: {
              title: '平台配置-编辑',
              permission: 'ChatProject.PlatSetting.Update',
              icon: PlusOutlined,
              hideInMenu: true,
            },
          },
        ],
      },
      {
        path: 'serviceConfigList',
        name: 'serviceConfigList',
        component: () => import('@/views/function/service/index.vue'),
        meta: {
          title: '客服配置',
          permission: 'ChatProject.PlatServicesConfigs.List',
          icon: CustomerServiceOutlined,
        },
      },
      {
        path: 'serviceManage',
        name: 'serviceManage',
        redirect: '/function/serviceConfigList',
        meta: {
          title: '客服配置',
          permission: 'ChatProject.PlatServicesConfigs.PlatServicesConfigs',
          icon: UserOutlined,
          hideInMenu: true,
        },
        children: [
          {
            path: 'create',
            name: 'serviceConfigCreate',
            component: () => import('@/views/function/service/update.vue'),
            meta: {
              title: '客服配置-创建',
              permission: 'ChatProject.PlatServicesConfigs.Create',
              icon: PlusOutlined,
              hideInMenu: true,
            },
          },
          {
            path: 'edit',
            name: 'serviceConfigUpdate',
            component: () => import('@/views/function/service/update.vue'),
            meta: {
              title: '客服配置-编辑',
              permission: 'ChatProject.PlatServicesConfigs.Update',
              icon: PlusOutlined,
              hideInMenu: true,
            },
          },
        ],
      },
    ],
  },
  {
    name: 'serviceEvaluation',
    path: 'serviceEvaluation',
    redirect: '/serviceEvaluation/statistics',
    meta: {
      title: '客服评价',
      permission: 'ChatProject.Ealuation',
      icon: LikeOutlined,
    },
    children: [
      {
        path: 'statistics',
        name: 'evaluationStatistics',
        component: () => import('@/views/evaluation/statistic/index.vue'),
        meta: {
          title: '评价统计',
          permission: 'ChatProject.Ealuation.List',
          icon: DashboardOutlined,
        },
      },
      {
        path: 'setting',
        name: 'evaluationSetting',
        component: () => import('@/views/evaluation/setting/index.vue'),
        meta: {
          title: '评价配置',
          permission: 'ChatProject.Ealuation.ProblemList',
          icon: AimOutlined,
        },
      },
      {
        path: 'evaluationManage',
        name: 'evaluationManage',
        redirect: '/serviceEvaluation/setting',
        meta: {
          title: '评价配置',
          permission: 'ChatProject.Ealuation.ManagerProblemList',
          icon: AimOutlined,
          hideInMenu: true,
        },
        children: [
          {
            path: 'create',
            name: 'evaluationSettingCreate',
            component: () => import('@/views/evaluation/setting/update.vue'),
            meta: {
              title: '创建评价配置',
              permission: 'ChatProject.Ealuation.ProblemCreate',
              hideInMenu: true,
            },
          },
          {
            path: 'edit',
            name: 'evaluationSettingEdit',
            component: () => import('@/views/evaluation/setting/update.vue'),
            meta: {
              title: '编辑评价配置',
              permission: 'ChatProject.Ealuation.ProblemUpdate',
              hideInMenu: true,
            },
          },
        ],
      },
    ],
  },
  {
    path: 'system',
    name: 'system',
    redirect: '/system/accountList',
    meta: {
      title: '系统管理',
      permission: 'ChatProject.Identity',
      icon: SettingOutlined,
    },
    children: [
      {
        path: 'accountList',
        name: 'accountList',
        component: () => import('@/views/system/account/index.vue'),
        meta: {
          title: '账号列表',
          permission: 'ChatProject.Identity.Users.List',
          icon: UserOutlined,
        },
      },
      {
        path: 'accountManage',
        name: 'accountManage',
        redirect: '/system/accountList',
        meta: {
          title: '账号管理',
          permission: 'ChatProject.Identity.Users',
          icon: UserOutlined,
          hideInMenu: true,
        },
        children: [
          {
            path: 'create',
            name: 'accountCreate',
            component: () => import('@/views/system/account/create.vue'),
            meta: {
              title: '创建账号',
              permission: 'ChatProject.Identity.Users.Create',
              icon: PlusOutlined,
              hideInMenu: true,
            },
          },
          {
            path: 'edit',
            name: 'accountEdit',
            component: () => import('@/views/system/account/edit.vue'),
            meta: {
              title: '编辑账号',
              permission: 'ChatProject.Identity.Users.Update',
              icon: UserOutlined,
              hideInMenu: true,
            },
          },
        ],
      },
      {
        path: 'roleList',
        name: 'roleList',
        component: () => import('@/views/system/role/index.vue'),
        meta: {
          title: '角色列表',
          permission: 'ChatProject.Identity.Roles.List',
          icon: ContactsOutlined,
        },
      },
      {
        path: 'roleManage',
        name: 'roleManage',
        redirect: '/system/roleList',
        meta: {
          title: '角色管理',
          permission: 'ChatProject.Identity.Roles',
          icon: ContactsOutlined,
          hideInMenu: true,
        },
        children: [
          {
            path: 'create',
            name: 'roleCreate',
            component: () => import('@/views/system/role/create.vue'),
            meta: {
              title: '创建角色',
              permission: 'ChatProject.Identity.Roles.Create',
              icon: PlusOutlined,
              hideInMenu: true,
            },
          },
          {
            path: 'edit',
            name: 'roleEdit',
            component: () => import('@/views/system/role/edit.vue'),
            meta: {
              title: '编辑角色',
              permission: 'ChatProject.Identity.Roles.Update',
              icon: UserOutlined,
              hideInMenu: true,
            },
          },
        ],
      },
    ],
  },
  {
    path: 'changepass',
    name: 'changepass',
    component: () => import('@/views/system/changepass/index.vue'),
    meta: {
      title: '修改密码',
      icon: UndoOutlined,
    },
  },
];
