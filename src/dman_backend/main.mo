import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";
import Iter "mo:base/Iter";

actor Token {

    var owner : Principal = Principal.fromText("<COMMAND_LINE_PRINCIPAL_ID>");
    var totalSupply : Nat = 100000;
    var symbol : Text = "DMAN";

    private stable var balanceEntries : [(Principal, Nat)] = [];

    private var balances = HashMap.HashMap<Principal, Nat>(1, Principal.equal, Principal.hash);
    if (balances.size() < 1) {
        balances.put(owner, totalSupply);
    };

    public query func balanceOf(who : Principal) : async Nat {

        let balance : Nat = switch (balances.get(who)) {
            case null 0;
            case (?result) result;
        };
        return balance;
    };

    public query func getSymbol() : async Text {
        return symbol;
    };

    public shared (msg) func payOut() : async Text {

        if (balances.get(msg.caller) == null) {
            if(totalSupply >= 100){
                totalSupply := totalSupply - 100;
                balances.put(msg.caller, 100);
                return "success";
            }
            else{
                return "Not enough free tokens left"
            }

        } else {
            return "Already Claimed";
        }

    };

    public shared (msg) func transfer(to : Principal, amount : Nat) : async Text {

        let fromBalance = await balanceOf(msg.caller);

        if (fromBalance > amount) {
            let newFromBalance : Nat = fromBalance - amount;
            balances.put(msg.caller, newFromBalance);

            let toBalance = await balanceOf(to);
            let newToBalance = toBalance + amount;
            balances.put(to, newToBalance);

            return "success";
        } else {
            return "insufficient funds";
        };
    };

    system func preupgrade() {
        balanceEntries := Iter.toArray(balances.entries());
    };

    system func postupgrade() {
        balances := HashMap.fromIter<Principal, Nat>(balanceEntries.vals(), 1, Principal.equal, Principal.hash);
        if (balances.size() < 1) {
            balances.put(owner, totalSupply);
        };
    };
};
