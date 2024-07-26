var visitMHVhatScript = {
    "root" : {
        "query":"How can we help you?",
        "suggestions":[
            "I am a data analyst and I am looking for a budget friendly embedded analytics service.",
            "I am a caretaker and I have to remotely monitor the physical condition of patient with sever body vibration (more common with the patients of parkinson disease).",
            "I am looking for an affordable ride sharing service for daily commute or one-off trips to a far destination."
        ]
    },
    "templates" : [
        {
            "query":"I am a data analyst and I am looking for a budget friendly embedded analytics service.",
            "response":"Please checkout our StarMH embedded analytics service.",
            "suggestions":[
                "What is subscription fee for StarMH embedded analytics service?",
                "How can I try StarMH embedded analytics service to check if it is a right fit for my needs?",
                "What are the core features of StarMH embedded analytics service?"
            ]
        },
        {
            "query":"What is subscription fee for StarMH embedded analytics service?",
            "response":"Currently this service is available is in beta version only which is free to try.",
            "suggestions":[]
        },
        {
            "query":"How can I try StarMH embedded analytics service to check if it is a right fit for my needs?",
            "response":"If not done already, please create a MapleHeap Store account and try the beta version of this service for free.",
            "suggestions":[]
        },
        {
            "query":"What are the core features of StarMH embedded analytics service?",
            "response":"Drag & Drop Dashboard Designer,<br/>Interactive Charts,<br/>Dedicated on-premise reporting database,<br/>APIs to ingest and sync reporting data,<br/>AI/NLP based analysis of data",
            "suggestions":[]
        },
        {
            "query":"I am a caretaker and I have to remotely monitor the physical condition of patient with sever body vibration (more common with the patients of parkinson disease).",
            "response":"Please checkout our PMSMH patient monitoring service.",
            "suggestions":[
                "What is subscription fee for PMSMH patient monitoring service?",
                "How can I try PMSMH patient monitoring service to check if it is a right fit for my needs?",
                "What are the core features of PMSMH patient monitoring?"
            ]
        },
        {
            "query":"What is subscription fee for PMSMH patient monitoring service?",
            "response":"This service is under development phase, we will share this information once it is released.",
            "suggestions":[]
        },
        {
            "query":"How can I try PMSMH patient monitoring service to check if it is a right fit for my needs?",
            "response":"This service is under development phase, we will share this information once it is released.",
            "suggestions":[]
        },
        {
            "query":"What are the core features of PMSMH patient monitoring?",
            "response":"This service is under development phase, we will share this information once it is released.",
            "suggestions":[]
        },
        {
            "query":"I am looking for an affordable ride sharing service for daily commute or one-off trips to a far destination.",
            "response":"Please checkout our VeloMH ride sharing service.",
            "suggestions":[
                "What is subscription fee for VeloMH ride sharing service?",
                "How can I try VeloMH ride sharing service to check if it is a right fit for my needs?",
                "What are the core features of VeloMH ride sharing service?"
            ]
        },
        {
            "query":"What is subscription fee for VeloMH ride sharing service?",
            "response":"This service is under development phase, we will share this information once it is released.",
            "suggestions":[]
        },
        {
            "query":"How can I try VeloMH ride sharing service to check if it is a right fit for my needs?",
            "response":"This service is under development phase, we will share this information once it is released.",
            "suggestions":[]
        },
        {
            "query":"What are the core features of VeloMH ride sharing service?",
            "response":"This service is under development phase, we will share this information once it is released.",
            "suggestions":[]
        },
    ]
};

function startVisitMHChat() {
    var chatContainer = document.getElementById('chat_converse');
    var obj = visitMHVhatScript.root;
    var robot = 
    `<span class="chat_msg_item chat_msg_item_admin">
        <div class="chat_avatar">
            <img src="./assets/img/robot.png"/>
        </div>` + obj.query + `
        <br/>`;           
    for(var i = 0; i < obj.suggestions.length; i++) {
        robot += `<div class="chat-suggestion" onclick="getVisitMHChatResponse('` + obj.suggestions[i] + `');">` + obj.suggestions[i] + `</div>`;
    }    
    robot += `</span>`;
    chatContainer.innerHTML = robot;
}

function getVisitMHChatResponse(userQuery) {
    var chatContainer = document.getElementById('chat_converse');
    var elements = document.querySelectorAll('.chat-suggestion');
    for(var i = 0; i < elements.length; i++) {
        elements[i].remove();
    }
    const querySpan = document.createElement('span');
    querySpan.classList.add('chat_msg_item');
    querySpan.classList.add('chat_msg_item_user');
    querySpan.innerHTML = userQuery;
    chatContainer.appendChild(querySpan);
    var obj = null;
    for(var i = 0; i < visitMHVhatScript.templates.length; i++) {
        var template = visitMHVhatScript.templates[i];
        if(template.query.trim().toLowerCase() === userQuery.trim().toLowerCase()) {
            obj = template;
            break;
        }
    }
    if(obj !== null) {
        const robotSpan = document.createElement('span');
        robotSpan.classList.add('chat_msg_item');
        robotSpan.classList.add('chat_msg_item_admin');
        var robot = `<div class="chat_avatar">
                <img src="./assets/img/robot.png"/>
            </div>` + obj.response + `
            <br/>`;           
        for(var i = 0; i < obj.suggestions.length; i++) {
            robot += `<div class="chat-suggestion" onclick="getVisitMHChatResponse('` + obj.suggestions[i] + `');">` + obj.suggestions[i] + `</div>`;
        }
        if(obj.suggestions.length === 0) {
            robot += `<div class="chat-suggestion" onclick="startVisitMHChat();">I want to start over.</div>`;
            robot += `<div class="chat-suggestion" onclick="window.location.href = './index.html#faqs';">I want to go to FAQs section.</div>`;
            robot += `<div class="chat-suggestion" onclick="window.location.href = './contact.html';">I want to get more information by contacting you.</div>`;
        }
        robotSpan.innerHTML = robot;
        chatContainer.appendChild(robotSpan);
    }
}

function checkDeviceWidth() {
    const width = window.innerWidth;
    if (width <= 480) {
        console.log(`Mobile device detected with width: ${width} pixels`);
        $('.chat-container .fabs').addClass('h-100');
    } else {
        $('.chat-container .fabs').removeClass('h-100');
    }
}

startVisitMHChat();

// Check the width on page load
checkDeviceWidth();