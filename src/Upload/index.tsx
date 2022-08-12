import React, { ChangeEvent, FC, useRef, useState } from 'react';
import axios from 'axios';
import './index.less';
import { UploadOutlined } from '@ant-design/icons';

import UploadList from './UploadList';
import Dragger from './Dragger';
import Button from '../Button';

export type UploadFileStatus = 'ready' | 'uploading' | 'success' | 'error';

export interface UploadFile {
  uid: string;
  size: number;
  name: string;
  status?: UploadFileStatus;
  percent?: number;
  raw?: File;
  response?: any;
  error?: any;
}

export interface BaseUploadProps {
  /**
   * @description       上传地址
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default
   */
  action: string;
  /**
   * @description       开启推拽上传
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default           false
   */
  drag?: boolean;
  /**
   * @description       是否显示上传进度
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default           false
   */
  showProgress?: boolean;
  /**
   * @description       默认上传文件
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default
   */
  defaultFileList?: UploadFile[];
  /**
   * @description       上传文件名称
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default
   */
  name?: string; // 文件名称
  /**
   * @description       上传请求headers
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default
   */
  headers?: { [key: string]: any };
  /**
   * @description       文件扩展属性
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default
   */
  data?: { [key: string]: any };
  /**
   * @description       上传请求时是否携带 cookie
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default           false
   */
  withCredentials?: boolean;
  /**
   * @description       上传格式文件限制
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default
   */
  accept?: string;
  /**
   * @description       文件多选
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default
   */
  multiple?: boolean; //
  /**
   * @description       上传文件之前的钩子，参数为上传的文件，若返回 false 则停止上传。支持返回一个 Promise 对象，Promise 对象 reject 时则停止上传，resolve 时开始上传（ resolve 传入 File 或 Blob 对象则上传 resolve 传入对象）
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default
   */
  beforeUpload?: (file: File) => boolean | Promise<File>;
  /**
   * @description       上传进度百分比钩子，参数为百分比和文件
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default
   */
  onProgress?: (percent: number, file: File) => void;
  /**
   * @description       文件上传成功回调，参数为成功详情对象和文件
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default
   */
  onSuccess?: (data: any, file: File) => void;
  /**
   * @description       文件上传失败回调，参数为失败详情对象和文件
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default
   */
  onError?: (err: any, file: File) => void;
  /**
   * @description       上传文件改变时的状态，参数为上传信息和文件
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default
   */
  onChange?: (data: any, file: File) => void;
  /**
   * @description       点击移除文件时的回调，返回值为 false 时不移除。支持返回一个 Promise 对象，Promise 对象 resolve(false) 或 reject 时不移除
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default
   */
  onRemove?: (file: UploadFile) => Boolean | Promise<Boolean>;
}

const Upload: FC<BaseUploadProps> = (props: any) => {
  const {
    action,
    defaultFileList,
    showProgress,
    drag,
    name, // 文件名称
    headers, // 上传请求headers
    data, // 文件扩展属性
    withCredentials,
    accept, // 上传文件限制
    multiple, // 多选
    children,
    onRemove,
    beforeUpload,
    onChange,
    onProgress,
    onSuccess,
    onError,
  } = props;
  const [fileList, setFileList] = useState<UploadFile[]>(defaultFileList || []);
  const uploadInputRef = useRef(null);

  // 更新上传对象状态
  const updateFileList = (updateFile: UploadFile, updateData: Partial<UploadFile>) => {
    setFileList((prevList) => {
      return prevList.map((file) => {
        if (file.uid === updateFile.uid) {
          return { ...file, ...updateData };
        }
        return file;
      });
    });
  };

  // 打开文件上传
  const handleClick = () => {
    if (uploadInputRef.current) {
      (uploadInputRef.current as HTMLInputElement).click();
    }
  };
  // 选择文件
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fiels = e.target.files;
    if (fiels) {
      uploadFiles(fiels);
      if (uploadInputRef.current) {
        (uploadInputRef.current as HTMLInputElement).value = '';
      }
    }
  };
  // 删除文件
  const handleRemove = (file: UploadFile) => {
    if (onRemove) {
      let res = onRemove(file);
      if (res === false) return;
      if (res instanceof Promise) {
        res.then((status) => {
          console.log(status);
          if (status === true) {
            removeFile(file);
          }
        });
      }
    } else {
      removeFile(file);
    }
  };
  const removeFile = (file: UploadFile) => {
    setFileList((list) => {
      return list.filter((item) => item.uid !== file.uid);
    });
  };

  const uploadFiles = (files: FileList) => {
    const uploadFiels = Array.from(files);
    uploadFiels.forEach((file) => {
      // beforeUpload
      if (!beforeUpload) {
        postFile(file);
      } else {
        const result = beforeUpload(file);
        // beforeUpload return Promise
        if (result && result instanceof Promise) {
          result.then((fileData) => {
            postFile(fileData);
          });
        }
        // beforeUpload return Boolean
        else if (result !== false) {
          postFile(file);
        }
      }
    });
  };

  const postFile = (file: File) => {
    let _file: UploadFile = {
      uid: Date.now() + 'upload_file',
      status: 'ready',
      name: file.name,
      size: file.size,
      percent: 0,
      raw: file,
    };
    // 更新file集合
    setFileList((prevList) => [_file, ...prevList]);
    // 创建提交文件对象
    const formData = new FormData();
    formData.append(name || file.name, file);
    if (data) {
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });
    }
    axios
      .post(action, formData, {
        headers: {
          ...headers, // 扩展headers
          'Content-Type': 'multipart/form-data',
        },
        withCredentials,
        onUploadProgress: (e) => {
          let percent = Math.round((e.loaded * 100) / e.total) || 0;
          if (percent <= 100) {
            updateFileList(_file, { percent, status: 'uploading' });
            if (onProgress) {
              onProgress(percent, file);
            }
          }
        },
      })
      .then((res) => {
        updateFileList(_file, { status: 'success', response: res.data });
        if (onSuccess) {
          onSuccess(res.data, file);
        }
        // onChange
        if (onChange) {
          onChange(res, file);
        }
      })
      .catch((err) => {
        updateFileList(_file, { status: 'error', response: err });
        if (onError) {
          onError(err, file);
        }
        if (onChange) {
          onChange(err, file);
        }
      });
  };

  const dragFile = (fileList: FileList) => {
    uploadFiles(fileList);
  };

  return (
    <>
      <div className="kai-upload-component">
        <div className="kai-upload-input" onClick={handleClick}>
          {drag ? (
            <Dragger onFile={dragFile}>{children}</Dragger>
          ) : (
            <Button icon={<UploadOutlined />}>{children || 'Upload File'}</Button>
          )}
          <input
            ref={uploadInputRef}
            type="file"
            onChange={handleFileChange}
            className="kai-upload-input"
            style={{ display: 'none' }}
          />
        </div>
      </div>
      <UploadList fileList={fileList} showProgress={showProgress} onRemove={handleRemove} />
    </>
  );
};

export default Upload;
