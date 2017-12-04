'use strict';
/**
 * model
 */
export default class extends think.model.base {
    /**
     * �û���¼��֤
     * @param  string  $username �û���
     * @param  string  $password �û�����
     * @param  integer $type     �û������� ��1-�û�����2-���䣬3-�ֻ���4-UID��
     * @return integer           ��¼�ɹ�-�û�ID����¼ʧ��-������
     */
    async signin(username, password, type = 1){
        let map={};
        switch (type) {
            case 1:
                map.username = username;
                break;
            case 2:
                map.email = username;
                break;
            case 3:
                map.mobile = username;
                break;
            case 4:
                map.id = username;
                break;
            default:
                return 0; //��������
        }
        let user = await this.where(map).find();
        if(!think.isEmpty(user) && user.status){
            /* ��֤�û����� */
            if(password === user.password){
                this.updateLogin(user.id);//�����û���¼��Ϣ
                return user.id; //��¼�ɹ��������û�ID
            } else {
                return -2; //�������
            }
        } else {
            return -1; //�û������ڻ򱻽���
        }
  }

    /**
     * �����û���¼��Ϣ
     * @param  integer $uid �û�ID
     */
    updateLogin(uid){
        let data = {
            'id'              : uid,
            'last_login_time' : Date.now(),
            'last_login_ip'   : "11",
    };
            this.update(data);
    }
}