import appHeader from '@Layouts/appHeader/index';
import appDrawer from '@Layouts/appDrawer/index';
import appContent from '@Layouts/appContent/index';
import appFooter from '@Layouts/appFooter/index';
import { routes } from '@Router/routes';

export default {
  name: 'App',

  data: () => ({
    // Drawer position (false = in; true = out)
    drawer: false,
    // Routes for navigation menu
    routes
  }),

  components: {
    appDrawer,
    appHeader,
    appContent,
    appFooter
  },

  methods: {
    // Toggle drawer in and out
    toggleDrawer () {
      this.drawer = !this.drawer;
    }
  },

  watch: {
    // Observe for route changes and close drawer
    $route (to, from) {
      this.drawer = false;
    }
  }
};
