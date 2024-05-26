import JSEncrypt from "jsencrypt";

export const encryptData = async (data: any, publicKey: string) => {
  const encrypt = new JSEncrypt();

  encrypt.setPublicKey(publicKey);

  return encrypt.encrypt(data);
};
