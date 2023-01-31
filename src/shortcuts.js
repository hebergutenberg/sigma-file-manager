// SPDX-License-Identifier: GPL-3.0-or-later
// License: GNU GPLv3 or later. See the license file in the project root for more information.
// Copyright © 2021 - present Aleksey Hoffman. All rights reserved.

import {i18n} from './localization'

// Allowed property values:
// conditions: {
//   inputFieldIsActive: Boolean
//   dialogIsOpened: Boolean
//   dirItemIsSelected: Boolean
// }
// eventName: String ('keydown'|'keypress')

export default {
  toggleApp: {
    isGlobal: true,
    isReadOnly: false,
    conditions: {},
    routes: ['all'],
    icon: 'mdi-application',
    action: {name: 'toggleApp'},
    shortcut: 'Ctrl + Shift + Space',
    description: 'shortcuts.openCloseTheAppWindow',
  },
  openGlobalSearch: {
    isGlobal: true,
    isReadOnly: false,
    conditions: {},
    routes: ['all'],
    icon: 'mdi-magnify',
    action: {name: 'openGlobalSearch'},
    shortcut: 'Alt + Ctrl + Shift + F',
    description: 'shortcuts.openGlobalSearch',
  },
  newNote: {
    isGlobal: true,
    isReadOnly: false,
    conditions: {},
    routes: ['all'],
    icon: 'mdi-square-edit-outline',
    action: {name: 'newNote'},
    shortcut: 'Alt + Shift + N',
    description: 'shortcuts.openTheAppWindowCreateANewNote',
  },
  shortcutsDialog: {
    isGlobal: false,
    isReadOnly: false,
    conditions: {
      inputFieldIsActive: false,
    },
    routes: ['all'],
    icon: 'mdi-pound',
    action: {
      name: 'toggleAppGuide',
      options: 'stortcuts',
    },
    shortcut: 'Backtick',
    description: 'shortcuts.displayShortcutList',
  },
  escapeAction: {
    isGlobal: false,
    isReadOnly: false,
    conditions: {},
    routes: ['all'],
    icon: 'mdi-close',
    action: {name: 'ESCAPE_BUTTON_HANDLER'},
    shortcut: 'Esc',
    description: 'shortcuts.closeOpenedDialogOverlay',
  },
  openWithQuickView: {
    isGlobal: false,
    isReadOnly: false,
    conditions: {
      inputFieldIsActive: false,
      dialogIsOpened: false,
    },
    preventDefaultType: '!inputFieldIsActive',
    routes: ['navigator', 'dashboard', 'home'],
    icon: 'mdi-text-box-search-outline',
    action: {name: 'OPEN_WITH_QUICK_VIEW'},
    shortcut: 'Space',
    description: 'shortcuts.openCloseSelectedFileInQuickView',
  },
  fullScreen: {
    isGlobal: false,
    isReadOnly: false,
    conditions: {},
    routes: ['all'],
    icon: 'mdi-fullscreen',
    iconSize: '26px',
    action: {name: 'TOGGLE_FULLSCREEN'},
    shortcut: 'F11',
    description: 'shortcuts.toggleFullScreen',
  },
  zoomIncrease: {
    isGlobal: false,
    isReadOnly: false,
    conditions: {},
    eventName: 'keypress',
    preventDefaultType: 'always',
    routes: ['all'],
    icon: 'mdi-plus',
    iconSize: '26px',
    action: {name: 'INCREASE_UI_ZOOM'},
    shortcut: 'Ctrl + Plus',
    description: 'shortcuts.uiZoomIncrease',
  },
  zoomDecrease: {
    isGlobal: false,
    isReadOnly: false,
    conditions: {},
    preventDefaultType: 'always',
    routes: ['all'],
    icon: 'mdi-minus',
    iconSize: '26px',
    action: {name: 'DECREASE_UI_ZOOM'},
    shortcut: 'Ctrl + Minus',
    description: 'shortcuts.uiZoomDecrease',
  },
  zoomReset: {
    isGlobal: false,
    isReadOnly: false,
    conditions: {},
    preventDefaultType: 'always',
    routes: ['all'],
    icon: 'mdi-backup-restore',
    iconSize: '26px',
    action: {name: 'RESET_UI_ZOOM'},
    shortcut: 'Ctrl + 0',
    description: 'shortcuts.uiZoomReset',
  },
  openInNewTab: {
    isGlobal: false,
    isReadOnly: false,
    conditions: {
      dirItemIsSelected: true,
      dialogIsOpened: false,
    },
    routes: ['navigator', 'dashboard'],
    icon: 'mdi-tab-plus',
    iconSize: '20px',
    action: {
      name: 'ADD_TAB',
      options: 'selected',
    },
    shortcut: 'Ctrl + T',
    description: 'shortcuts.newTabInCurrentWorkspace',
  },
  closeCurrentTab: {
    isGlobal: false,
    isReadOnly: false,
    conditions: {
      dirItemIsSelected: true,
      dialogIsOpened: false,
    },
    routes: ['navigator'],
    icon: 'mdi-tab-remove',
    iconSize: '20px',
    action: {
      name: 'CLOSE_CURRENT_TAB',
    },
    shortcut: 'Ctrl + W',
    description: 'shortcuts.closeCurrentTab',
  },
  closeAllTabsInCurrentWorkspace: {
    isGlobal: false,
    isReadOnly: false,
    conditions: {
      dirItemIsSelected: true,
      dialogIsOpened: false,
    },
    routes: ['navigator'],
    icon: 'mdi-tab-remove',
    iconSize: '20px',
    action: {
      name: 'CLOSE_ALL_TABS_IN_CURRENT_WORKSPACE',
    },
    shortcut: 'Ctrl + Shift + W',
    description: 'shortcuts.closeAllTabsInCurrentWorkspace',
  },
  closeAppWindow: {
    isGlobal: false,
    isReadOnly: false,
    routes: ['all'],
    icon: 'mdi-close-box-outline',
    iconSize: '20px',
    action: {
      name: 'CLOSE_APP_WINDOW',
    },
    shortcut: 'Ctrl + Q',
    description: 'shortcuts.closeAppWindow',
  },
  scrollTop: {
    isGlobal: false,
    isReadOnly: false,
    conditions: {
      inputFieldIsActive: false,
    },
    routes: ['all'],
    icon: 'mdi-chevron-up',
    iconSize: '28px',
    action: {
      name: 'SCROLL_TOP_CONTENT_AREA',
    },
    shortcut: 'Shift + T',
    description: 'shortcuts.scrollPageToTheTop',
  },
  switchTab: {
    isGlobal: false,
    isReadOnly: false,
    conditions: {},
    routes: ['all'],
    icon: 'mdi-tab',
    iconSize: '20px',
    action: {name: 'switchTab'},
    shortcut: 'Alt + [1 - 9]',
    description: 'shortcuts.switchBetweenTabs',
  },
  switchWorkspace: {
    isGlobal: false,
    isReadOnly: false,
    conditions: {},
    routes: ['all'],
    icon: 'mdi-vector-arrange-below',
    action: {name: 'switchWorkspace'},
    shortcut: 'Alt + Shift + [1 - 9]',
    description: 'shortcuts.switchBetweenWorkspaces',
  },
  switchView: {
    isGlobal: false,
    isReadOnly: false,
    conditions: {
      inputFieldIsActive: false,
      dialogIsOpened: false,
    },
    routes: ['all'],
    icon: 'mdi-arrange-send-backward',
    action: {name: 'SWITCH_ROUTE'},
    shortcut: 'Shift + [1 - 9]',
    description: 'shortcuts.switchBetweenViews',
  },
  focusAddressBar: {
    isGlobal: false,
    isReadOnly: false,
    conditions: {
      dialogIsOpened: false,
    },
    routes: ['all'],
    icon: 'mdi-link-variant',
    action: {
      name: 'TOGGLE_ADDRESS_BAR',
      options: 'addressBarEditor',
    },
    shortcut: 'Ctrl + /',
    description: 'shortcuts.toggleAddressBar',
  },
  copyCurrentDirPath: {
    isGlobal: false,
    isReadOnly: false,
    routes: ['all'],
    icon: 'mdi-link-variant',
    action: {name: 'COPY_CURRENT_DIR_PATH'},
    shortcut: 'Ctrl + <',
    description: 'shortcuts.copyCurrentDirectoryPathToClipboard',
  },
  openCopiedPath: {
    isGlobal: false,
    isReadOnly: false,
    routes: ['all'],
    icon: 'mdi-link-variant',
    action: {
      name: 'OPEN_DIR_PATH_FROM_OS_CLIPBOARD',
    },
    shortcut: 'Ctrl + >',
    description: 'shortcuts.openCopiedPath',
  },
  openTerminal: {
    isGlobal: false,
    isReadOnly: false,
    conditions: {
      dirItemIsSelected: true,
      dialogIsOpened: false,
    },
    routes: ['navigator'],
    icon: 'mdi-console',
    action: {
      name: 'OPEN_SELECTED_IN_TERMINAL',
      options: {
        asAdmin: false,
      },
    },
    shortcut: 'Alt + T',
    description: 'shortcuts.openCurrentDirInTerminal',
  },
  openTerminalAsAdmin: {
    isGlobal: false,
    isReadOnly: false,
    conditions: {
      dirItemIsSelected: true,
      dialogIsOpened: false,
    },
    routes: ['navigator'],
    icon: 'mdi-console',
    action: {
      name: 'OPEN_SELECTED_IN_TERMINAL',
      options: {
        asAdmin: true,
      },
    },
    shortcut: 'Alt + Shift + T',
    description: 'shortcuts.openCurrentDirInTerminalAsAdmin',
  },
  focusFilter: {
    isGlobal: false,
    isReadOnly: false,
    conditions: {
      dialogIsOpened: false,
    },
    routes: ['all'],
    icon: 'mdi-filter-variant',
    action: {name: 'TOGGLE_FILTER_FOCUS'},
    shortcut: 'Ctrl + F',
    description: 'shortcuts.focusUnfocusFilterField',
  },
  toggleGlobalSearch: {
    isGlobal: false,
    isReadOnly: false,
    conditions: {
      dialogIsOpened: false,
    },
    routes: ['all'],
    icon: 'mdi-magnify',
    action: {name: 'TOGGLE_GLOBAL_SEARCH'},
    shortcut: 'Ctrl + Shift + F',
    description: 'shortcuts.showHideGlobalSearch',
  },
  newDirectory: {
    isGlobal: false,
    isReadOnly: false,
    conditions: {
      dialogIsOpened: false,
    },
    routes: ['navigator'],
    icon: 'mdi-folder-plus-outline',
    action: {
      name: 'showNewDirItemDialog',
      options: 'directory',
    },
    shortcut: 'Alt + N',
    description: 'shortcuts.createNewDirectoryInTheCurrentDirectory',
  },
  newFile: {
    isGlobal: false,
    isReadOnly: false,
    conditions: {
      dialogIsOpened: false,
    },
    routes: ['navigator'],
    icon: 'mdi-file-plus-outline',
    action: {
      name: 'showNewDirItemDialog',
      options: 'file',
    },
    shortcut: 'Alt + M',
    description: 'shortcuts.createNewFileInCurrentDirectory',
  },
  renameSelected: {
    isGlobal: false,
    isReadOnly: false,
    conditions: {
      inputFieldIsActive: false,
      dialogIsOpened: false,
      dirItemIsSelected: true,
    },
    routes: ['all'],
    icon: 'mdi-form-textbox',
    iconSize: '20px',
    action: {
      name: 'OPEN_DIALOG',
      options: {
        dialogName: 'renameDirItemDialog',
      },
    },
    shortcut: 'F2',
    description: 'shortcuts.renameSelectedItems',
  },
  reloadDirectory: {
    isGlobal: false,
    isReadOnly: false,
    conditions: {
      dialogIsOpened: false,
    },
    routes: ['navigator'],
    icon: 'mdi-refresh',
    action: {
      name: 'RELOAD_DIR',
      options: {
        scrollTop: false,
        emitNotification: true,
      },
    },
    shortcut: 'F5',
    description: 'shortcuts.reloadCurrentDirectory',
  },
  openSelectedDirItem: {
    isGlobal: false,
    isReadOnly: false,
    conditions: {
      dialogIsOpened: false,
    },
    routes: ['navigator'],
    icon: 'mdi-open-in-app',
    action: {name: 'OPEN_LAST_SELECTED_DIRITEM'},
    shortcut: 'Enter',
    description: 'shortcuts.openLastSelectedDirectoryItem',
  },
  openSelectedDirectory: {
    isGlobal: false,
    isReadOnly: false,
    conditions: {
      dialogIsOpened: false,
    },
    routes: ['navigator'],
    icon: 'mdi-subdirectory-arrow-right',
    action: {name: 'OPEN_LAST_SELECTED_DIRITEM'},
    shortcut: 'Alt + E',
    description: 'shortcuts.enterSelectedDirectory',
  },
  quitSelectedDirectory: {
    isGlobal: false,
    isReadOnly: false,
    conditions: {
      dialogIsOpened: false,
    },
    routes: ['navigator'],
    icon: 'mdi-subdirectory-arrow-left',
    action: {name: 'GO_UP_DIRECTORY'},
    shortcut: 'Alt + Q',
    description: 'shortcuts.quitCurrentDirectory',
  },
  navigateDirUp: {
    isGlobal: false,
    isReadOnly: false,
    conditions: {
      dialogIsOpened: false,
    },
    routes: ['navigator'],
    icon: 'mdi-chevron-up',
    iconSize: '26px',
    action: {name: 'NAVIGATE_DIR_UP'},
    shortcut: 'Alt + W',
    description: 'shortcuts.selectDirectoryItemInTheDirectionUp',
  },
  navigateDirLeft: {
    isGlobal: false,
    isReadOnly: false,
    conditions: {
      dialogIsOpened: false,
    },
    routes: ['navigator'],
    icon: 'mdi-chevron-left',
    iconSize: '26px',
    action: {name: 'NAVIGATE_DIR_LEFT'},
    shortcut: 'Alt + A',
    description: 'shortcuts.selectDirectoryItemInTheDirectionLeft',
  },
  navigateDirDown: {
    isGlobal: false,
    isReadOnly: false,
    conditions: {
      dialogIsOpened: false,
    },
    routes: ['navigator'],
    icon: 'mdi-chevron-down',
    iconSize: '26px',
    action: {name: 'NAVIGATE_DIR_DOWN'},
    shortcut: 'Alt + S',
    description: 'shortcuts.selectDirectoryItemInTheDirectionDown',
  },
  navigateDirRight: {
    isGlobal: false,
    isReadOnly: false,
    conditions: {
      dialogIsOpened: false,
    },
    routes: ['navigator'],
    icon: 'mdi-chevron-right',
    iconSize: '26px',
    action: {name: 'NAVIGATE_DIR_RIGHT'},
    shortcut: 'Alt + D',
    description: 'shortcuts.selectDirectoryItemInTheDirectionRight',
  },
  goToPreviousDirectory: {
    isGlobal: false,
    isReadOnly: false,
    conditions: {
      inputFieldIsActive: false,
      dialogIsOpened: false,
    },
    routes: ['navigator'],
    icon: 'mdi-arrow-left',
    action: {name: 'LOAD_PREVIOUS_HISTORY_PATH'},
    shortcut: 'Alt + Left',
    description: 'shortcuts.goToPreviousDirectoryInHistory',
  },
  goToNextDirectory: {
    isGlobal: false,
    isReadOnly: false,
    conditions: {
      inputFieldIsActive: false,
      dialogIsOpened: false,
    },
    routes: ['navigator'],
    icon: 'mdi-arrow-right',
    action: {name: 'LOAD_NEXT_HISTORY_PATH'},
    shortcut: 'Alt + Right',
    description: 'shortcuts.goToNextDirectoryInHistory',
  },
  goUpDirectory: {
    isGlobal: false,
    isReadOnly: false,
    conditions: {
      inputFieldIsActive: false,
      dialogIsOpened: false,
    },
    routes: ['navigator'],
    icon: 'mdi-arrow-up',
    action: {name: 'GO_UP_DIRECTORY'},
    shortcut: 'Alt + Up',
    description: 'shortcuts.goUpDirectory',
  },
  selectDirItem: {
    isGlobal: false,
    isReadOnly: false,
    conditions: {
      dialogIsOpened: false,
    },
    routes: ['all'],
    icon: 'mdi-checkbox-multiple-outline',
    action: {name: 'selectDirItem'},
    shortcut: 'Ctrl + LeftClick',
    description: 'shortcuts.selectDeselectItemInTheCurrentDirectory',
  },
  selectDirItemRange: {
    isGlobal: false,
    isReadOnly: false,
    conditions: {
      dialogIsOpened: false,
    },
    routes: ['all'],
    icon: 'mdi-priority-low',
    action: {name: 'selectDirItemRange'},
    shortcut: 'Shift + LeftClick',
    description: 'shortcuts.selectDeselectItemRangeInTheCurrentDirectory',
  },
  selectAllDirItems: {
    isGlobal: false,
    isReadOnly: false,
    conditions: {
      inputFieldIsActive: false,
      dialogIsOpened: false,
    },
    preventDefaultType: '!inputFieldIsActive',
    routes: ['navigator'],
    icon: 'mdi-select-all',
    action: {name: 'SELECT_ALL_DIR_ITEMS'},
    shortcut: 'Ctrl + A',
    description: 'shortcuts.selectAllItemsInCurrentDirectory',
  },
  setDirItemsForCopying: {
    isGlobal: false,
    isReadOnly: false,
    conditions: {
      inputFieldIsActive: false,
    },
    routes: ['navigator'],
    icon: 'mdi-content-copy',
    iconSize: '20px',
    action: {
      name: 'SET_TO_FS_CLIPBOARD',
      options: {
        type: 'copy',
      },
    },
    shortcut: 'Ctrl + C',
    description: 'shortcuts.setSelectedItemsForCopying',
  },
  addDirItemsForCopying: {
    isGlobal: false,
    isReadOnly: false,
    conditions: {
      inputFieldIsActive: false,
    },
    routes: ['navigator'],
    icon: 'mdi-content-copy',
    iconSize: '20px',
    action: {
      name: 'ADD_TO_FS_CLIPBOARD',
      options: {
        type: 'copy',
      },
    },
    shortcut: 'Ctrl + Shift + C',
    description: 'shortcuts.addSelectedItemsForCopying',
  },
  setDirItemsForMoving: {
    isGlobal: false,
    isReadOnly: false,
    conditions: {
      inputFieldIsActive: false,
    },
    routes: ['navigator'],
    icon: 'mdi-content-duplicate',
    iconSize: '20px',
    action: {
      name: 'SET_TO_FS_CLIPBOARD',
      options: {
        type: 'move',
      },
    },
    shortcut: 'Ctrl + X',
    description: 'shortcuts.setSelectedItemsForMoving',
  },
  addDirItemsForMoving: {
    isGlobal: false,
    isReadOnly: false,
    conditions: {
      inputFieldIsActive: false,
    },
    routes: ['navigator'],
    icon: 'mdi-content-copy',
    iconSize: '20px',
    action: {
      name: 'ADD_TO_FS_CLIPBOARD',
      options: {
        type: 'move',
      },
    },
    shortcut: 'Ctrl + Shift + X',
    description: 'shortcuts.addSelectedItemsForMoving',
  },
  pasteSelectedDirItems: {
    isGlobal: false,
    isReadOnly: false,
    conditions: {
      inputFieldIsActive: false,
    },
    routes: ['navigator'],
    icon: 'mdi-swap-horizontal',
    iconSize: '24px',
    action: {
      name: 'PASTE_FS_CLIPBOARD_DIR_ITEMS',
    },
    shortcut: 'Ctrl + V',
    description: 'shortcuts.transferPreparedForCopying',
  },
  trashSelected: {
    isGlobal: false,
    isReadOnly: false,
    conditions: {
      inputFieldIsActive: false,
      dialogIsOpened: false,
    },
    routes: ['all'],
    icon: 'mdi-trash-can-outline',
    action: {name: 'TRASH_SELECTED_DIR_ITEMS'},
    shortcut: 'Delete',
    description: 'shortcuts.moveSelectedItemsToTrash',
  },
  deleteSelected: {
    isGlobal: false,
    isReadOnly: false,
    conditions: {
      inputFieldIsActive: false,
      dialogIsOpened: false,
    },
    routes: ['all'],
    icon: 'mdi-eraser',
    action: {name: 'DELETE_SELECTED_DIR_ITEMS'},
    shortcut: 'Shift + Delete',
    description: 'shortcuts.deleteSelectedItemsFromDrive',
  },
  windowPosition: {
    isGlobal: false,
    isReadOnly: true,
    conditions: {},
    routes: ['all'],
    icon: 'mdi-axis-arrow',
    description: 'shortcuts.quickWindowPositioning',
    action: {name: 'windowPosition'},
    shortcut: {
      win32: 'Meta + [Left | Right | Up]',
      linux: 'Meta + [Left | Right | Up | Down]',
    },
  },
  emoji: {
    isGlobal: false,
    isReadOnly: true,
    conditions: {
      inputFieldIsActive: true,
    },
    routes: ['all'],
    icon: 'mdi-emoticon-outline',
    description: 'shortcuts.displaySystemEmojiAndSymbolPicker',
    action: {name: 'emoji'},
    shortcut: {
      win32: 'Meta + Dot',
      darwin: 'Cmd + Ctrl + Space',
    },
  },
  clipboard: {
    isGlobal: false,
    isReadOnly: true,
    conditions: {
      inputFieldIsActive: true,
    },
    routes: ['all'],
    icon: 'mdi-clipboard-text-play-outline',
    description: 'shortcuts.displaySystemClipboard',
    action: {name: 'clipboard'},
    shortcut: {win32: 'Meta + V'},
  },
}
