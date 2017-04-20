/*
 * Copyright (C) 2016-2017 Canonical Ltd
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */
'use strict';


var intlData = {
    zh: {
      "title": "串行库",
      "description": "串行库是一个Web服务，加密迹象活泼的Ubuntu模型断言。",
      "home": "家",
      "brand": "牌",
      "brand-description": "设备品牌名称",
      "model": "机型",
      "model-description": "设备型号的名称",
      "serial-number": "<Serial Number>",
      "revision": "<Revision>",
      "date": "<Date>",
      "fingerprint": "<Fingerprint>",
      "models": "楷模",
      "models_available": "以下型号可供选择",
      "accounts": "<Account Assertions>",
      "signinglog": "<Signing Log>",
      "signinglog-description": "<Log of the serial numbers and device-key fingerprints that have been used>",
      "delete-log": "<Delete log>",
      "version": "版本",
      "edit-model": "编辑模型",
      "new-model": "新模式",
      "delete-model": "<Delete model>",
      "add-new-model": "添加新模式",
      "confirm-model-delete": "<Confirm deletion of this model>",
      "confirm-log-delete": "Confirm deletion of this log",
      "yes": "是",
      "save": "保存",
      "cancel": "取消",
      "activate": "启用",
      "deactivate": "关闭",
      "authority-id": "<Signing Authority>",
      "authority-id-description": "<The authority for signing models>",
      "key-id": "<Key ID>",
      "active": "<Active>",
      "inactive": "<Inactive>",
      "private-key": "私钥签名",
      "private-key-short": "<System-User Key>",
      "private-key-description": "将用于签署设备标识的签署密钥",
      "private-key-user": "<System-User Assertion Key>",
      "private-key-user-short": "<System-User Key>",
      "private-key-user-description": "<The signing-key that will be used to sign the system-user assertion>",
      "new-public-key": "新的公用密钥",
      "public-key": "公钥",
      "new-public-key-description": "粘贴需要访问身份库的计算机的公钥",
      "public-keys": "公共密钥",
      "public-key-description": "添加一个新的公共密钥",
      "public-keys-authorized": "下面的键被授权",
      "public-key-confirm": "确认公钥缺失",
      "signing-key": "<Signing Key>",
      "signing-keys": "<Signing Keys>",
      "user-key": "<User Key>",
      "no-signing-keys-found": "<No Signing Keys found>",
      "new-signing-key-description": "<Paste the signing-key or upload the file>",
      "new-signing-key": "<New Signing Key>",
      "add-new-signing-key": "<Add a new signing key>",
      "more": "<More>",
      "find-serialnumber": "<find serial number>",
      "makes": "<Makes>",
      "models": "<Models>",
      "download": "<Download>",
      "assertion": "<Assertion>",
      "no-assertions": "<No assertions found>",
      "no-assertion": "<No assertion found>",
      "account-keys": "<Account Key Assertions>",

      // Error messages
      "error-nil-data": "未初始化的POST数据",
      "error-sign-empty": "没有签名提供的数据",
      "error-decode-json": "错误解码JSON",
      "error-model-not-found": "无法找到匹配的品牌，型号和修订模型",
      "error-model-not-active": "<The model is linked with an inactive signing-key>",
      "error-format-assertions": "格式化出错断言",
      "error-read-private-key": "错误读取私钥",
      "error-signing-assertions": "登录错误的断言",
      "error-fetch-models": "错误获取模型",
      "error-invalid-model": "无效的模型ID",
      "error-get-model": "找不到模型",
      "error-model-data": "没有模型数据提供",
      "error-creating-model": "错误创建模型",
      "error-updating-model": "错误更新模型",
      "error-decode-key": "错误解码的base64签名密钥",
      "error-validate-model": "品牌和型号必须提供与修订必须大于零",
      "error-model-exists": "用相同的品牌，型号和版本A设备已经存在",
      "error-invalid-key": "该签名密钥无效",
      "error-created-model": "无法找到创建的模型",
      "error-validate-new-model": "品牌，型号和签名密钥，必须提供与修订必须大于零",
      "error-adding-key": "错误添加公钥",
      "error-deleting-key": "错误删除公钥",
      "error-key-data": "没有找到的公开密钥提供的数据",
      "error-validate-key": "公钥必须输入",
      "error-key-exists": "SSH公用密钥已经存在",
      "error-key-not-found": "SSH公用密钥无法找到",
      "error-validate-signingkey": "<The Signing Key must be selected>",
      "error-validate-userkey": "<The System-User Key must be selected>",
      "error-keypair-store": "<Error storing the signing key>"

    },

		en: {
      "title": "Serial Vault",
      "description": "The Serial Vault is a web service that cryptographically signs snappy Ubuntu model assertions.",
      "home": "Home",
			"brand": "Brand",
      "brand-description": "The name of the device brand",
      "model": "Model",
      "model-description": "The name of the device model",
      "serial-number": "Serial Number",
      "revision": "Revision",
      "date": "Date",
      "fingerprint": "Fingerprint",
      "models": "Models",
      "models_available": "The following models are available",
      "accounts": "Account Assertions",
      "signinglog": "Signing Log",
      "signinglog-description": "Log of the serial numbers and device-key fingerprints that have been used",
      "delete-log": "Delete log",
      "version": "Version",
      "edit-model": "Edit Model",
      "new-model": "New Model",
      "add-new-model": "Add a new model",
      "delete-model": "Delete model",
      "confirm-model-delete": "Confirm deletion of this model",
      "confirm-log-delete": "Confirm deletion of this log",
      "yes": "Yes",
      "save": "Save",
      "cancel": "Cancel",
      "activate": "Activate",
      "deactivate": "Deactivate",
      "authority-id": "Signing Authority",
      "authority-id-description": "The authority for signing models",
      "key-id": "Key ID",
      "active": "Active",
      "inactive": "Inactive",
      "private-key": "Serial Assertion Key",
      "private-key-short": "Serial Key",
      "private-key-description": "The signing-key that will be used to sign the device identity",
      "private-key-user": "System-User Assertion Key",
      "private-key-user-short": "System-User Key",
      "private-key-user-description": "The signing-key that will be used to sign the system-user assertion",
      "new-public-key": "New Public Key",
      "public-key": "Public Key",
      "new-public-key-description": "Paste the public key of the machine that needs access to the Serial Vault",
      "public-keys": "Public Keys",
      "public-key-description": "Add a new public key",
      "public-keys-authorized": "The following keys are authorized",
      "public-key-confirm": "Confirm deletion of the public key",
      "signing-key": "Signing Key",
      "signing-keys": "Signing Keys",
      "user-key": "User Key",
      "new-signing-key-description": "Paste the signing-key or upload the file",
      "no-signing-keys-found": "No signing keys found",
      "new-signing-key": "New Signing Key",
      "add-new-signing-key": "Add a new signing key",
      "more": "More",
      "find-serialnumber": "find serial number",
      "makes": "Makes",
      "models": "Models",
      "download": "Download",
      "assertion": "Assertion",
      "no-assertions": "No assertions found",
      "no-assertion": "No assertion found",
      "account-keys": "Account Key Assertions",

      // Error messages
      "error-nil-data": "Uninitialized POST data",
      "error-sign-empty": "No data supplied for signing",
      "error-decode-json": "Error decoding JSON",
      "error-model-not-found": "Cannot find model with the matching brand and model",
      "error-model-not-active": "The model is linked with an inactive signing-key",
      "error-format-assertions": "Error formatting the assertions",
      "error-read-private-key": "Error reading the private key",
      "error-signing-assertions": "Error signing the assertions",
      "error-fetch-models": "Error fetching the models",
      "error-invalid-model": "Invalid model ID",
      "error-get-model": "Cannot find the model",
      "error-model-data": "No model data supplied",
      "error-creating-model": "Error creating the model",
      "error-updating-model": "Error updating the model",
      "error-decode-key": "Error decoding the base64 Signing Key",
      "error-validate-model": "The Brand and Model must be supplied",
      "error-model-exists": "A device with the same Brand and Model already exists",
      "error-invalid-key": "The Signing-key is invalid",
      "error-created-model": "Cannot find the created model",
      "error-validate-new-model": "The Brand, Model and Signing-Keys must be supplied",
      "error-adding-key": "Error adding a public key",
      "error-deleting-key": "Error deleting a public key",
      "error-key-data": "No data supplied for the public key",
      "error-validate-key": "The public key must be entered",
      "error-key-exists": 'The ssh public key already exists',
      "error-key-not-found": "The ssh public key cannot be found",
      "error-validate-signingkey": "The Serial Assertion Key must be selected",
      "error-validate-userkey": "The System-User Assertion Key must be selected",
      "error-keypair-store": "Error storing the signing key"
		}
};

module.exports = intlData;
