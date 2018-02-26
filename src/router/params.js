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

const Logo = resolve => {
  require.ensure(['../components/public/Logo.vue'], () => {
    resolve(require('../components/public/Logo.vue'))
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

export {
  AppHeader,
  AppFooter,
  Logo,
  Index,
  SignIn,
  SignUp,
  AdminIndex
}
