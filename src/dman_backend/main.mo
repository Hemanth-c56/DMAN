import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";
//this is my command line's principal id -> 32dt7-mq65y-jfjsd-xglde-w2mth-tmvxc-rmc5p-ttg4c-44obm-aa6fs-vae
//this is my canister's principal id -> c2lt4-zmaaa-aaaaa-qaaiq-cai
//this is the principal id of the interface -> 2vxsx-fae

actor Token{
    
    var owner: Principal = Principal.fromText("32dt7-mq65y-jfjsd-xglde-w2mth-tmvxc-rmc5p-ttg4c-44obm-aa6fs-vae");
    var totalSupply : Nat = 100000;
    var symbol: Text = "DMAN";

    var balances = HashMap.HashMap<Principal, Nat>(1, Principal.equal, Principal.hash);
    balances.put(owner, totalSupply);

    public query func balanceOf(who: Principal): async Nat{

        let balance : Nat = switch (balances.get(who)){
            case null 0;
            case (?result) result;
        };
        return balance;
    };

    public query func getSymbol(): async Text{
        return symbol;
    };

    public shared(msg) func payOut(): async Text {

        if(balances.get(msg.caller) == null){
            var result = await transfer(msg.caller, 100);
            return result;
        }
        else{
            return "Already Claimed"
        }

    };

    public shared(msg) func transfer(to: Principal, amount: Nat) : async Text {

        let fromBalance = await balanceOf(msg.caller);

        if(fromBalance > amount){
            let newFromBalance : Nat = fromBalance - amount;
            balances.put(msg.caller, newFromBalance);

            let toBalance = await balanceOf(to);
            let newToBalance = toBalance + amount;
            balances.put(to, newToBalance);

            return "success";
        }
        else{
            return "insufficient funds";
        }

        

    }
}