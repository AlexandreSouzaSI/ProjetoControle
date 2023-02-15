'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.bulkInsert('notificacao_status', [{
            id_notificationStatus: '8c4536dc-e0fc-4163-a53c-e540b6ccb82a',
            created_at: new Date(),
            updated_at: new Date(),
            status: 'Agendamentos',
            tagname: 'agendamentos'
        },
        {
            id_notificationStatus: '4ab77d64-5736-40b9-84f2-7ea293fd9a99',
            created_at: new Date(),
            updated_at: new Date(),
            status: 'Notificações de mensagens',
            tagname: 'notificacoes_mensagens'
        },
        {
            id_notificationStatus: '68b59c02-5a1a-4e78-b944-7db3ce481a72',
            created_at: new Date(),
            updated_at: new Date(),
            status: ' Alertas emitidos pela EMATER',
            tagname: 'Alertas_Emater' 
        },
    ], {}),

    down: (queryInterface) => queryInterface.bulkDelete('notificacao_status', null, {}),
  };
