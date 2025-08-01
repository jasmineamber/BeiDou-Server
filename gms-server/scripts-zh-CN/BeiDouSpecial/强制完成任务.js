/* ==================
 脚本类型: 完成任务   
 脚本作者：德克斯特
 =====================
 */
//------------------------------------------------------------------------


var status;
let quests = [];
let chosenQuest;

//Start
function start() {
	levelStart();
}

/**
 * @description 如果是sendSelectLevel，那么会根据玩家的选项自动路由到对应的level+selection方法
 */
function levelStart() {
	let text = "进行中的任务 #r#e(强制完成没有任务奖励) #n#b:\r\n";
	cm.getPlayer().getStartedQuests().forEach(questStatus => {
		let quest = questStatus.getQuest();
		quests.push([quest, quest.getName(), quest.getId()])
	});
	quests.forEach(([,name,id], index) => {
		text += `#L${index}#${name}(${id})#l\r\n`;
	})
	if (quests.length) {
		cm.sendNextSelectLevel("Confirm", text);
	} else {
		cm.sendOk("没有进行中的任务");
		cm.dispose();
	}
}

function levelConfirm(selection) {
	chosenQuest = quests[selection]
	const [_, name] = chosenQuest;
	let text = `您确定要完成 #b${name} #k? \t #e#r(没有任务奖励 ! ! !)`;
	cm.sendYesNoLevel("Dispose", "Complete", text);
}

function levelComplete() {
	const [quest, name, id] = chosenQuest;
	if (quest.getNpcRequirement(true) != -1) {
		cm.getClient().getAbstractPlayerInteraction().forceCompleteQuest(id, quest.getNpcRequirement(true));
	} else {
		cm.getClient().getAbstractPlayerInteraction().forceCompleteQuest(id);
	}
	cm.getPlayer().dropMessage(5, `任务: ${name} 已完成`);
	cm.dispose();
}

function levelDispose() {
	cm.dispose()
}