'use babel';

import MongoView from './mongo-view';
import { CompositeDisposable } from 'atom';
import {React, ReactDOM} from 'react-for-atom';
import MongoRightPanel from './components/MongoRightPanel';
import store from './redux/Store';
import {createDatabasesRefreshed, createCollectionsRefreshed} from './redux/Actions';

export default {

  mongoView: null,
  mongoRightPanel: null,
  subscriptions: null,
  taskRunner: {
    taskIsStarted: null,
    taskIsFinished: null
  },

  activate(state) {
    this.mongoView = new MongoView(state.mongoViewState);
    this.mongoRightPanel = atom.workspace.addRightPanel({
      item: this.mongoView.getElement(),
      visible: false,
      priority: 20
    });
    ReactDOM.render(<MongoRightPanel/>, this.mongoView.getElement());
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'mongo:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.mongoRightPanel.destroy();
    this.subscriptions.dispose();
    this.mongoView.destroy();
  },

  consumeTaskRunner(taskRunner) {
    this.taskRunner.taskIsStarted = taskRunner.taskIsStarted;
    this.taskRunner.taskIsFinished = taskRunner.taskIsFinished;
  },

  serialize() {
    return {
      mongoViewState: this.mongoView.serialize()
    };
  },

  toggle() {
    console.log('Mongo was toggled!');
    return (
      this.mongoRightPanel.isVisible() ?
      this.mongoRightPanel.hide() :
      this.mongoRightPanel.show()
    );
  }

};
