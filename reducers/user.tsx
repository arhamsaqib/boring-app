const initialState = {
  user: null,
  Client: {HELLO: 'Burhan'},
  workspace: null,
  timers: [
    {
      key: '5min',
      time: 300,
      status: 'stop',
      originalTime: 300,
      reference: null,
    },
    {
      key: '10min',
      time: 600,
      status: 'stop',
      originalTime: 600,
      reference: null,
    },
    {
      key: '15min',
      time: 900,
      status: 'stop',
      originalTime: 900,
      reference: null,
    },
    {
      key: '20min',
      time: 1200,
      status: 'stop',
      originalTime: 1200,
      reference: null,
    },
    {
      key: '25min',
      time: 1500,
      status: 'stop',
      originalTime: 1500,
      reference: null,
    },
    {
      key: '30min',
      time: 1800,
      status: 'stop',
      originalTime: 1800,
      reference: null,
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'Client': {
      const {Client} = action;
      return {
        ...state,
        Client,
      };
    }
    case 'USER_SAVE': {
      const {user} = action;
      return {
        ...state,
        user,
      };
    }

    case 'USER_WORKSPACE': {
      const {workspace} = action;
      return {
        ...state,
        workspace,
      };
    }

    case 'SAVE_TIMERS': {
      console.log('save timers', action);
      const {timers} = action;
      return {
        ...state,
        timers: [...timers],
      };
    }

    case 'REMOVE_USER': {
      return {
        user: null,
      };
    }
    default: {
      return state;
    }
  }
};
