export const Client = (user) => ({
  type: 'Client',
  user,
});

export const userSave = (user) => ({
  type: 'USER_SAVE',
  user,
});

export const saveWorkSpace = (workspace) => ({
  type: 'USER_WORKSPACE',
  workspace,
});

export const saveTimers = (timers) => ({
  type: 'SAVE_TIMERS',
  timers,
});

export const userRemove = () => ({
  type: 'REMOVE_USER',
});
