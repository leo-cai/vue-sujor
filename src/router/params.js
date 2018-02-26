const AppHeader = resolve => {
  require.ensure(['../components/public/AppHeader.vue'], () => {
    resolve(require('../components/public/AppHeader.vue'))
  })
}

const AppFooter = resolve => {
  require.ensure(['../components/public/AppFooter.vue'], () => {
    resolve(require('../components/public/AppFooter.vue'))
  })
}

const Index = resolve => {
  require.ensure(['../pages/Index.vue'], () => {
    resolve(require('../pages/Index.vue'))
  })
}

const SignIn = resolve => {
  require.ensure(['../pages/admin/SignIn.vue'], () => {
    resolve(require('../pages/admin/SignIn.vue'))
  })
}

const SignUp = resolve => {
  require.ensure(['../pages/admin/SignUp.vue'], () => {
    resolve(require('../pages/admin/SignUp.vue'))
  })
}

const AdminIndex = resolve => {
  require.ensure(['../pages/admin/Index.vue'], () => {
    resolve(require('../pages/admin/Index.vue'))
  })
}

const Test = resolve => {
  require.ensure(['../pages/Test.vue'], () => {
    resolve(require('../pages/Test.vue'))
  })
}

export {
  AppHeader,
  AppFooter,
  Index,
  SignIn,
  SignUp,
  AdminIndex,
  Test
}
