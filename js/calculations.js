function StaffMember(name,discountPercent){
    this.name = name;
    this.discountPercent = discountPercent;
}

function Stock(item){
    this.item = item;
}

//Global Variables
var staffMembers = {};
var sally = new StaffMember("Sally",0.05);
staffMembers['sally'] = sally;
var bob = new StaffMember("Bob",0.10);
staffMembers['bob'] = bob;
var me = new StaffMember("Aaron",0.20);
staffMembers['me'] = me;
//item variables

var eggs = new Stock("Eggs");
var milk = new Stock("Milk");
var magazine = new Stock("Magazine");
var chocolate = new Stock("Chocolate");


//item Objects
var Stock = {};
Stock["eggs"] = eggs;
Stock["milk"] = milk;
Stock['magazine'] = magazine;
Stock ['chocolate'] = chocolate;


var cashRegister = {
    total:0,
    lastTransactionAmount: 0,
    add: function(itemCost){
        this.total += (itemCost || 0);
        this.lastTransactionAmount = itemCost;
    },
    scan: function(item,quantity){
        switch (item){
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
        return true;
    },
    voidLastTransaction : function(){
        this.total -= this.lastTransactionAmount;
        this.lastTransactionAmount = 0;
    },
    // Create a new method applyStaffDiscount here
    applyStaffDiscount : function(employee){
        this.total -= this.total*(employee.discountPercent);
        
    }
    
};

